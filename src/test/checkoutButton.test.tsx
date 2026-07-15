import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { CheckoutButton } from "@/components/shared/CheckoutButton";
import { LocaleProvider } from "@/lib/locale";

const { startCheckoutMock, checkoutEnabled } = vi.hoisted(() => ({
  startCheckoutMock: vi.fn(),
  checkoutEnabled: { value: false },
}));

vi.mock("@/lib/stripe", () => ({
  startCheckout: startCheckoutMock,
}));

vi.mock("@/lib/paymentAvailability", () => ({
  get isPublicCheckoutEnabled() {
    return checkoutEnabled.value;
  },
}));

const renderCheckoutButton = () =>
  render(
    <LocaleProvider>
      <MemoryRouter initialEntries={["/pricing"]}>
        <Routes>
          <Route path="/pricing" element={<CheckoutButton priceId="price_test" serviceName="Brand System Sprint">Start package</CheckoutButton>} />
          <Route path="/payment/coming-soon" element={<p>Payment coming soon</p>} />
        </Routes>
      </MemoryRouter>
    </LocaleProvider>,
  );

describe("CheckoutButton", () => {
  afterEach(() => {
    startCheckoutMock.mockReset();
    checkoutEnabled.value = false;
  });

  it("starts checkout and prevents duplicate requests while loading", async () => {
    checkoutEnabled.value = true;
    let resolveCheckout!: () => void;
    startCheckoutMock.mockReturnValueOnce(new Promise<void>((resolve) => {
      resolveCheckout = resolve;
    }));

    renderCheckoutButton();
    const button = screen.getByRole("button", { name: "Start package" });

    fireEvent.click(button);
    fireEvent.click(button);

    expect(startCheckoutMock).toHaveBeenCalledTimes(1);
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");

    resolveCheckout();
    await waitFor(() => expect(button).not.toBeDisabled());
  });

  it("shows a useful error when checkout cannot be created", async () => {
    checkoutEnabled.value = true;
    startCheckoutMock.mockRejectedValueOnce(new Error("Stripe is not configured"));

    renderCheckoutButton();
    fireEvent.click(screen.getByRole("button", { name: "Start package" }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Payment checkout is temporarily unavailable",
    );
  });

  it("routes customers to the coming-soon page while public checkout is disabled", () => {
    renderCheckoutButton();

    fireEvent.click(screen.getByRole("button", { name: "Start package" }));

    expect(screen.getByText("Payment coming soon")).toBeInTheDocument();
    expect(startCheckoutMock).not.toHaveBeenCalled();
  });
});

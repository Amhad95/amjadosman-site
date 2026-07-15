import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CheckoutButton } from "@/components/shared/CheckoutButton";
import { LocaleProvider } from "@/lib/locale";

const { startCheckoutMock } = vi.hoisted(() => ({
  startCheckoutMock: vi.fn(),
}));

vi.mock("@/lib/stripe", () => ({
  startCheckout: startCheckoutMock,
}));

const renderCheckoutButton = () =>
  render(
    <LocaleProvider>
      <CheckoutButton priceId="price_test">Start package</CheckoutButton>
    </LocaleProvider>,
  );

describe("CheckoutButton", () => {
  afterEach(() => {
    startCheckoutMock.mockReset();
  });

  it("starts checkout and prevents duplicate requests while loading", async () => {
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
    startCheckoutMock.mockRejectedValueOnce(new Error("Stripe is not configured"));

    renderCheckoutButton();
    fireEvent.click(screen.getByRole("button", { name: "Start package" }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Payment checkout is temporarily unavailable",
    );
  });
});

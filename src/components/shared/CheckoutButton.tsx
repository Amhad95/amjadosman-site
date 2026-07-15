import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { startCheckout } from '@/lib/stripe';
import { isPublicCheckoutEnabled } from '@/lib/paymentAvailability';
import { useLocale } from '@/lib/locale';
import { getUiCopy } from '@/lib/uiCopy';

interface CheckoutButtonProps {
  children: React.ReactNode;
  priceId: string;
  mode?: 'payment' | 'subscription';
  textColor?: React.ComponentProps<typeof PrimaryButton>['textColor'];
  serviceName?: string;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  children,
  priceId,
  mode = 'payment',
  textColor = 'ink',
  serviceName,
}) => {
  const { locale } = useLocale();
  const copy = getUiCopy(locale);
  const navigate = useNavigate();
  const [isStarting, setIsStarting] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleClick = async () => {
    if (isStarting) return;

    if (!isPublicCheckoutEnabled) {
      const query = serviceName ? `?service=${encodeURIComponent(serviceName)}` : '';
      navigate(`/payment/coming-soon${query}`);
      return;
    }

    setIsStarting(true);
    setHasError(false);

    try {
      await startCheckout(priceId, mode);
      setIsStarting(false);
    } catch (error) {
      console.error('Checkout could not be started', error);
      setHasError(true);
      setIsStarting(false);
    }
  };

  return (
    <>
      <PrimaryButton
        onClick={handleClick}
        disabled={isStarting}
        textColor={textColor}
        aria-busy={isStarting}
      >
        {isStarting ? copy.startingCheckout : children}
      </PrimaryButton>
      {hasError && (
        <p role="alert" className="basis-full text-sm leading-relaxed text-red-700">
          {copy.checkoutError}
        </p>
      )}
    </>
  );
};

export default CheckoutButton;

import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useBooking } from '@/contexts/BookingContext';

const BOOKING_URL = "https://calendar.google.com/calendar/appointments/PLACEHOLDER";

export const BookingModal: React.FC = () => {
  const { isOpen, closeBooking } = useBooking();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeBooking()}>
      <DialogContent className="max-w-2xl w-full h-[70vh] p-0 overflow-hidden">
        <iframe
          src={BOOKING_URL}
          className="w-full h-full border-0"
          title="Book a call"
          allow="camera; microphone"
        />
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;

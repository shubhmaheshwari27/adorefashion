"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import WhatsAppBooking from "./WhatsAppBooking";
import Image from "next/image";

export default function WhatsAppFloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="p-0 m-0 bg-transparent hover:bg-transparent focus:ring-0 focus:outline-none border-none shadow-none"
          onClick={() => setOpen(true)}
        >
          <Image
            src="/icons/whatsapp.svg"
            alt="WhatsApp"
            width={36}
            height={36}
            className="sm:w-10 sm:h-10"
          />
        </Button>
      </div>

      {/* Modal Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full max-w-sm sm:max-w-md p-6 rounded-xl max-h-[90vh] overflow-auto">
          <DialogTitle className="sr-only">
            WhatsApp Consultation Booking
          </DialogTitle>
          <WhatsAppBooking />
        </DialogContent>
      </Dialog>
    </>
  );
}

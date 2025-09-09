"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import WhatsAppBooking from "./WhatsAppBooking";
import Image from "next/image";

const placeholder = "/assets/placeholders/adore_placeholder.jpg";

const exhibitions = [
  { id: 1, name: "Exhibition 1" },
  { id: 2, name: "Exhibition 2" },
  { id: 3, name: "Exhibition 3" },
  { id: 4, name: "Exhibition 4" },
];

const ExhibitionSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-8 bg-white dark:bg-black border-t border-muted">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Header */}
        <div>
          <span className="text-amber-600 font-medium uppercase">
            Exhibitions & Events
          </span>
          <h2 className="heading-sm text-gradient mt-2 mb-4">
            Adore at Prestigious Fashion Exhibitions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We frequently participate in renowned fashion exhibitions and
            cultural events to bring our exquisite ethnic wear directly to you.
          </p>
        </div>

        {/* Gallery with names below */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {exhibitions.map((expo) => (
            <div key={expo.id} className="flex flex-col items-center">
              <div className="relative aspect-square w-full bg-amber-50 rounded-xl overflow-hidden shadow-sm group">
                <Image
                  src={`${placeholder}?height=200&width=200`}
                  alt={expo.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-amber-800">
                {expo.name}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-amber-800 mb-2">
            Invite Us to Your Exhibition
          </h3>
          <p className="text-muted-foreground mb-4">
            Want to collaborate with Adore at your next event? Connect with us
            directly on WhatsApp to get started.
          </p>
          <Button
            onClick={() => setOpen(true)}
            className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full"
          >
            Invite via WhatsApp
          </Button>
        </div>
      </div>

      {/* WhatsApp Booking Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md w-full p-6 rounded-xl max-h-[90vh] overflow-auto">
          <DialogTitle className="sr-only">
            Invite Adore to Your Exhibition
          </DialogTitle>
          <WhatsAppBooking isEventBooking />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ExhibitionSection;

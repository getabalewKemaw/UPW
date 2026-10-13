"use client";

import { useState } from "react";
import { SERVICES_LIST } from "@/data/services-data";
import { ServicesHero } from "./ServicesHero";
import { ServiceCard } from "./ServiceCard";
import { AppointmentBookingSection } from "./AppointmentBookingSection";
import { ServicesFAQ } from "./ServicesFAQ";

export function ServicesPageView() {
  const [selectedBookingTierId, setSelectedBookingTierId] = useState<string>("tier-consult");

  return (
    <div className="w-full flex flex-col gap-10 sm:gap-14 lg:gap-16">
      {/* 1. Services Hero & Overview */}
      <ServicesHero />

      {/* 2. Roster of the 5 Core Engineering Services (Clean Editorial Flow) */}
      <section aria-label="Core Engineering Services" className="w-full flex flex-col border-t border-theme/20">
        {SERVICES_LIST.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            onSelectBookingTier={(tierId) => setSelectedBookingTierId(tierId)}
          />
        ))}
      </section>

      {/* 3. Interactive Technical Talk & Appointment Booking Engine */}
      <AppointmentBookingSection
        selectedTierId={selectedBookingTierId}
        onSelectTier={(tierId) => setSelectedBookingTierId(tierId)}
      />

      {/* 4. Frequently Answered Questions */}
      <ServicesFAQ />
    </div>
  );
}

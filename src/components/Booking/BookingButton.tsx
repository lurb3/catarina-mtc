"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { CAL_LINKS, CalEvent, WHATSAPP_URL } from "@/config/booking";

type Props = {
  event: CalEvent;
  className?: string;
  children: React.ReactNode;
};

/**
 * Opens the Cal.com booking popup for the given event type.
 * Falls back to a WhatsApp link when the Cal.com link isn't configured.
 */
const BookingButton = ({ event, className, children }: Props) => {
  // The embed expects "username/event-slug", so strip the domain if present
  const calLink = CAL_LINKS[event].replace(/^https?:\/\/(www\.)?cal\.com\//, "");

  useEffect(() => {
    if (!calLink) return;
    (async () => {
      const cal = await getCalApi({ namespace: event });
      cal("ui", {
        layout: "month_view",
        hideEventTypeDetails: false,
        cssVarsPerTheme: {
          light: { "cal-brand": "#2D352C" },
          dark: { "cal-brand": "#E6CFB8" },
        },
      });
    })();
  }, [calLink, event]);

  if (!calLink) {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      data-cal-namespace={event}
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view","theme":"light"}'
      className={className}
    >
      {children}
    </button>
  );
};

export default BookingButton;

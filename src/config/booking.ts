// Booking configuration — single place to change how appointments are booked.
// When the in-house scheduling software is ready, only this file and
// `components/Booking/BookingButton.tsx` need to change.

// Cal.com event links — full URL or "username/event-slug" both work.
// Leave empty to fall back to WhatsApp.
export const CAL_LINKS = {
  firstConsultation: "https://cal.com/catarina-abreu-mtc-nis22b/primeira-consulta",
  followUpConsultation:
    "https://cal.com/catarina-abreu-mtc-nis22b/consulta-de-seguimento",
} as const;

export type CalEvent = keyof typeof CAL_LINKS;

export const WHATSAPP_URL =
  "https://wa.me/351918844601?text=" +
  encodeURIComponent("Olá Catarina, gostaria de marcar uma consulta.");

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, consent } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 },
      );
    }

    if (consent !== true) {
      return NextResponse.json(
        {
          error:
            "Para enviar o pedido, aceite o tratamento dos seus dados pessoais.",
        },
        { status: 400 },
      );
    }

    // Created per request (not at module load) so builds don't require the key
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: sendError } = await resend.emails.send({
      from: "Catarina MTC <geral@mail.catarinaabreumtc.com>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `${name} - Pedido de contacto catarinaabreumtc.com`,
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}\n\n---\nConsentimento RGPD aceite em ${new Date().toISOString()}`,
    });

    if (sendError) {
      return NextResponse.json({ error: sendError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro. Tente novamente mais tarde." },
      { status: 500 },
    );
  }
}

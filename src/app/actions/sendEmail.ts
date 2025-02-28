import { Resend } from "resend";

export const sendEmail = async (formData: FormData) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const title = formData.get("title")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  await resend.emails.send({
    from: "AAwebpage@resend.dev",
    to: "annaabra1@gmail.com",
    subject: title,
    html: `<p><strong>Od:</strong> ${email}</p><p>${message}</p>`,
  });
};

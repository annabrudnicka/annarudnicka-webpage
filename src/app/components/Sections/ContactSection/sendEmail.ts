"use server";

import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "Empty title"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Empty message"),
});

export const sendEmail = async (formData: FormData) => {
  const validatedFields = schema.safeParse({
    title: formData.get("title"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "AAwebpage@resend.dev",
    to: "annaabra1@gmail.com",
    subject: validatedFields.data.title,
    html: `<p><strong>Od:</strong> ${validatedFields.data.email}</p><p>${validatedFields.data.message}</p>`,
  });
};

import { Resend } from "resend";

export default async function EmailForm() {
  const sendEmail = async (formData: FormData) => {
    "use server";
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

  return (
    <form action={sendEmail} className="space-y-4">
      <div>
        <label className="sr-only" htmlFor="title">
          Title
        </label>
        <input
          className="w-full rounded-lg p-3 text-sm"
          placeholder="Title"
          type="text"
          name="title"
        />
      </div>

      <div>
        <div>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-lg p-3 text-sm"
            placeholder="E-mail"
            type="email"
            name="email"
          />
        </div>
      </div>

      <div>
        <label className="sr-only" htmlFor="message">
          Message
        </label>

        <textarea
          className="w-full min-h-52 rounded-lg p-3 text-sm"
          placeholder="Message"
          name="message"
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="inline-block w-full rounded-lg bg-neutral-700 px-5 py-3 font-medium text-white sm:w-auto"
        >
          Send
        </button>
      </div>
    </form>
  );
}

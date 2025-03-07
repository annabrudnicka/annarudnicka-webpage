import { sendEmail } from "@/app/components/Sections/ContactSection/sendEmail";

export default function EmailForm() {
  return (
    <div className="scale-in-element opacity-0 scale-0 rounded-lg bg-gradient-bg p-8 shadow-lg sm:w-1/2 sm:ml-12">
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
            required
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
              required
            />
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="message">
            Message
          </label>

          <textarea
            className="w-full h-48 rounded-lg p-3 text-sm"
            placeholder="Message"
            name="message"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-neutral-700 hover:bg-neutral-500 text-white w-auto"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

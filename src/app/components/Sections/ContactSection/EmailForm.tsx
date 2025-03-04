import { sendEmail } from "../../../actions/sendEmail";

export default function EmailForm() {
  return (
    <div className="scale-in-element opacity-0 scale-0 rounded-lg bg-gradient-bg p-8 shadow-lg w-1/2 ml-12">
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
            className="bg-neutral-700 hover:bg-neutral-500 text-white sm:w-auto"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

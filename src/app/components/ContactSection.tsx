const ContactSection = () => {
  return (
    <section className="h-fit w-screen px-4 py-12">
      <div className="flex justify-center ">
        <div className="w-1/3 pr-2">
          <h1 className="text-4xl pb-3">Contact</h1>

          <p className="max-w-xl text-lg  pb-3">
            If you happen to have any questions about my profile or potential
            cooperation, please feel free to contact me.
          </p>

          <span className="flex items-center gap-2 pb-3">
            {/* <Image
                      aria-hidden
                      src="/file.svg"
                      alt="File icon"
                      width={16}
                      height={16}
                    /> */}
            +48 530 728 298
          </span>
        </div>

        <div className="rounded-lg bg-gradient-to-b from-orange-50 to-gray-200 p-8 shadow-lg w-1/3">
          <form action="#" className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="title">
                Title
              </label>
              <input
                className="w-full rounded-lg p-3 text-sm"
                placeholder="Title"
                type="text"
                id="title"
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
                  id="email"
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
                id="message"
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

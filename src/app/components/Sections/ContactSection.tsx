"use client";

import { useEffect } from "react";
import EmailForm from "../EmailForm";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".scale-in-element");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    elements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <section className="h-fit w-screen px-4 py-12">
      <div className="flex justify-between max-w-4xl mx-auto">
        <div className="scale-in-element opacity-0 scale-0 w-1/2 pr-2">
          <h1 className="text-4xl pb-3">Contact</h1>

          <p className="max-w-xl text-lg  pb-5">
            If you happen to have any questions about my profile or potential
            cooperation, please feel free to contact me.
          </p>

          <span className="flex items-center gap-5 pb-5">
            <Image
              src="/linkedinColor.png"
              alt="linkedin icon"
              width={40}
              height={40}
            />
            <Link href={"www.linkedin.com/in/annababramowicz"}>
              linkedin/annaabramowicz
            </Link>
          </span>

          <span className="flex items-center gap-5 pb-5">
            <Image
              src="/githubColor.png"
              alt="github icon"
              width={40}
              height={40}
            />
            <Link href={"https://www.github.com/annaabramowicz"}>
              github/annaabramowicz
            </Link>
          </span>

          <span className="flex items-center gap-5 pb-5">
            <Image
              src="/mailColor.png"
              alt="mail icon"
              width={40}
              height={40}
            />
            anna.b.abramowicz@gmail.com
          </span>

          <span className="flex items-center gap-5 pb-5">
            <Image
              src="/phoneColor.png"
              alt="phone icon"
              width={40}
              height={40}
            />
            +48 530 728 298
          </span>
        </div>
        <EmailForm />
      </div>
    </section>
  );
};

export default ContactSection;

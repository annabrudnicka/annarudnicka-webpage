"use client";

// import { useEffect } from "react";
import EmailForm from "./EmailForm";
import Image from "next/image";
import Link from "next/link";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import DownloadCVButton from "../HomeSection/DownloadCVButton";

const ContactSection = () => {
  useIntersectionObserver(".scale-in-element");

  return (
    <section className="h-fit w-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-playfair text-5xl pb-8">Contact</h1>
        <div className="flex justify-between">
          <div className="scale-in-element opacity-0 scale-0 w-1/2 pr-2 h-full">
            <p className="max-w-xl text-md pb-5">
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
              <Link
                href={"www.linkedin.com/in/annababramowicz"}
                className="text-md"
              >
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
              <Link
                href={"https://www.github.com/annaabramowicz"}
                className="text-md"
              >
                github/annaabramowicz
              </Link>
            </span>

            <span className="flex items-center text-md gap-5 pb-5">
              <Image
                src="/mailColor.png"
                alt="mail icon"
                width={40}
                height={40}
              />
              anna.b.abramowicz@gmail.com
            </span>

            <span className="flex items-center text-md gap-5 pb-5">
              <Image
                src="/phoneColor.png"
                alt="phone icon"
                width={40}
                height={40}
              />
              +48 530 728 298
            </span>
            <div className="text-md">
              <DownloadCVButton className="bg-gradient-bg ml-16 mt-3" />
            </div>
          </div>
          <EmailForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

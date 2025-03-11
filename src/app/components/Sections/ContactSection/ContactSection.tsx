"use client";

import EmailForm from "./EmailForm";
import Image from "next/image";
import Link from "next/link";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import DownloadCVButton from "../HomeSection/DownloadCVButton";
import { contactItems } from "./contactItems";

const ContactSection = () => {
  useIntersectionObserver(".scale-in-element");

  return (
    <section className="h-fit w-screen sm:px-4 py-8">
      <div className="max-w-6xl mx-4 sm:mx-auto">
        <h1 className="font-playfair text-5xl pb-8">Contact</h1>
        <div className="sm:flex justify-between">
          <div className="scale-in-element opacity-0 scale-0 sm:w-1/2 pr-2 h-full">
            <p className="max-w-xl text-md pb-5">
              If you happen to have any questions about my profile or potential
              cooperation, please feel free to contact me.
            </p>

            {contactItems.map((item, index) => (
              <span key={index} className="flex items-center gap-5 pb-5">
                <Image src={item.src} alt={item.alt} width={40} height={40} />
                <Link href={item.href} className="text-md">
                  {item.title}
                </Link>
              </span>
            ))}

            <div className="text-md">
              <DownloadCVButton className="bg-gradient-bg mt-3 mb-8" />
            </div>
          </div>
          <EmailForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

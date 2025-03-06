"use client";

import Image from "next/image";
import { useEffect } from "react";
import { experiences } from "./experiences";

const ExperienceSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    elements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <section className="h-fit w-screen  bg-gradient-bg flex items-center">
      <div className="max-w-6xl py-8 mx-auto">
        <h1 className="font-playfair text-5xl mb-9">Experience</h1>

        <div className="grid grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`fade-in bg-white p-4 rounded-xl shadow-md h-40 ${
                exp.company.includes("Capgemini") &&
                "border border-neutral-400 hover:shadow-lg transition-transform transform hover:scale-[1.05]"
              }`}
            >
              {exp.company.includes("Capgemini") && (
                <div className="flex">
                  <Image
                    src="/Capgemini.svg"
                    alt="Capgemini icon"
                    width={70}
                    height={70}
                    className="object-contain mr-6"
                  />
                  <div className="flex-1">
                    <h3 className="font-playfair text-3xl">{exp.title}</h3>
                    <h4 className="text-md text-gray-600">
                      {exp.company} • {exp.period}
                    </h4>
                    <div className="flex justify-end w-full">
                      <button className="bg-gray-200 w-max ">Show more</button>
                    </div>
                  </div>
                </div>
              )}
              {!exp.company.includes("Capgemini") && (
                <div>
                  <h3 className="font-playfair text-3xl mb-1">{exp.title}</h3>
                  <h4 className="text-md text-gray-600">
                    {exp.company} • {exp.period}
                  </h4>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

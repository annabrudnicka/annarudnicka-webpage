"use client";

import Image from "next/image";
import { useEffect } from "react";

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

  const experiences = [
    {
      title: "Personal Development",
      company: "Self-Development",
      period: "01.2024 - obecnie",
    },
    {
      title: "Technical Specialist",
      company: "SCD Sebastian Cibis",
      period: "10.2022 - 12.2023",
    },
    {
      title: "Business Owner",
      company: "Short-term rental service in Wroclaw",
      period: "07.2019 - obecnie",
    },
    {
      title: "Junior Software Developer",
      company: "Capgemini Software Solutions Center",
      period: "09.2017 – 05.2019",
    },
    {
      title: "Technical Specialist",
      company: "CS-BETON Poland - Design",
      period: "07.2016 - 08.2017",
    },
  ];

  return (
    <section className="h-fit w-screen  bg-gradient-bg flex items-center">
      <div className="max-w-5xl py-8 mx-auto">
        <h1 className="text-4xl mb-8">Experience</h1>

        <div className="grid grid-cols-2 gap-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`fade-in bg-white p-3 rounded-xl shadow-md h-[150px] ${
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
                    <h3 className="text-2xl mb-1">{exp.title}</h3>
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
                  <h3 className="text-2xl mb-1">{exp.title}</h3>
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

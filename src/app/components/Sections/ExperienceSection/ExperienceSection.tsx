"use client";

import { useState } from "react";
import { experiences } from "./experiences";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import { createPortal } from "react-dom";
import { Popup } from "./Popup";
import { DefaultCard } from "./DefaultCard";
import { CapgeminiCard } from "./CapgeminiCard";

const ExperienceSection = () => {
  useIntersectionObserver("scale-in-element");
  const [activePopup, setActivePopup] = useState<number | null>(null);

  const togglePopup = (index: number) => {
    setActivePopup(activePopup === index ? null : index);
  };

  return (
    <section className="h-fit w-screen bg-gradient-bg flex items-center">
      <div className="max-w-6xl py-8 mx-auto">
        <h1 className="font-playfair text-5xl mb-5">Experience</h1>
        <div className="grid grid-cols-2 gap-3">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="scale-in-element relative bg-white shadow-md h-36  rounded-xl flex flex-col justify-between"
            >
              {exp.company.includes("Capgemini") ? (
                <CapgeminiCard
                  exp={exp}
                  index={index}
                  togglePopup={togglePopup}
                />
              ) : (
                <DefaultCard
                  exp={exp}
                  index={index}
                  togglePopup={togglePopup}
                />
              )}
              {activePopup === index &&
                createPortal(
                  <Popup exp={exp} closePopup={() => togglePopup(index)} />,
                  document.body
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

"use client";

import { useState } from "react";
import Image from "next/image";
import { experiences } from "./experiences";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import {
  CapgeminiCardProps,
  DefaultCardProps,
  ExperienceCardProps,
  PopupProps,
} from "@/app/types";

// ExperienceSection Component
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
            <ExperienceCard
              key={index}
              exp={exp}
              index={index}
              togglePopup={togglePopup}
              activePopup={activePopup}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ExperienceCard Component
const ExperienceCard = ({
  exp,
  index,
  togglePopup,
  activePopup,
}: ExperienceCardProps) => (
  <div className="scale-in-element relative bg-white shadow-md h-36  rounded-xl flex flex-col justify-between">
    {exp.company.includes("Capgemini") ? (
      <CapgeminiCard exp={exp} index={index} togglePopup={togglePopup} />
    ) : (
      <DefaultCard exp={exp} index={index} togglePopup={togglePopup} />
    )}
    {activePopup === index && (
      <Popup exp={exp} closePopup={() => togglePopup(index)} />
    )}
  </div>
);

// CapgeminiCard Component
const CapgeminiCard = ({ exp, index, togglePopup }: CapgeminiCardProps) => (
  <div className="flex items-start border border-gray-600 rounded-xl h-[inherit] p-3">
    <Image
      src="/Capgemini.svg"
      alt="Capgemini icon"
      width={70}
      height={70}
      className="object-contain mr-6"
    />
    <div className="flex-1 flex flex-col  h-[120px] ">
      <div>
        <h3 className="font-playfair text-3xl">{exp.title}</h3>
        <h4 className="text-md text-gray-600">
          {exp.company} • {exp.period}
        </h4>
      </div>
      <div className="flex justify-end w-full">
        <button
          className="bg-gradient-bg px-4 py-2 rounded-lg "
          onClick={() => togglePopup(index)}
        >
          Show more
        </button>
      </div>
    </div>
  </div>
);

// DefaultCard Component
const DefaultCard = ({ exp, index, togglePopup }: DefaultCardProps) => (
  <div className="flex flex-col justify-between h-full p-3">
    <div className="flex-1">
      <h3 className="font-playfair text-3xl">{exp.title}</h3>
      <h4 className="text-md text-gray-600">
        {exp.company} • {exp.period}
      </h4>
    </div>
    <div className="flex justify-end">
      <button
        className="bg-gray-200 px-4 py-2 rounded-lg mt-2"
        onClick={() => togglePopup(index)}
      >
        Show more
      </button>
    </div>
  </div>
);

// Popup Component
const Popup = ({ exp, closePopup }: PopupProps) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white border rounded-lg p-3 max-w-2xl relative">
      <button
        className="absolute h-10 w-10 right-4 text-2xl p-1"
        onClick={closePopup}
      >
        &times;
      </button>
      <h2 className="font-playfair text-3xl mb-2">{exp.company}</h2>
      {exp.projects.map((project, index) => (
        <div key={index} className="bg-gray-100 p-2 rounded-lg shadow-lg my-1">
          <h3 className="font-playfair text-2xl mb-2">{project.title}</h3>
          <ul className="list-disc list-inside space-y-1">
            {project.tasks.map((task, taskIndex) => (
              <li key={taskIndex}>{task.description}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceSection;

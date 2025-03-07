"use client";

import { useState } from "react";
import Image from "next/image";
import { capgeminiProjects, experiences } from "./experiences";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

const ExperienceSection = () => {
  useIntersectionObserver("scale-in-element");
  const [activePopup, setActivePopup] = useState(null);

  const togglePopup = (index) => {
    setActivePopup(activePopup === index ? null : index);
  };

  return (
    <section className="h-fit w-screen bg-gradient-bg flex items-center">
      <div className="max-w-6xl py-8 mx-auto">
        <h1 className="font-playfair text-5xl mb-9">Experience</h1>

        <div className="grid grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="scale-in-element relative bg-white rounded-xl shadow-md h-40"
            >
              {exp.company.includes("Capgemini") ? (
                <div className="border border-gray-600 rounded-xl p-4">
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
                        <button
                          className="bg-gray-200 px-4 py-2 rounded-lg mt-2"
                          onClick={() => togglePopup(index)}
                        >
                          Show more
                        </button>
                      </div>
                    </div>
                  </div>
                  {activePopup === index && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                      <div className="bg-white border border-gray-400 rounded-lg p-3 max-w-2xl relative">
                        <button
                          className="absolute top-2 right-4 "
                          onClick={() => setActivePopup(null)}
                        >
                          &times;
                        </button>
                        <h2 className="font-playfair text-3xl mb-4">
                          Capgemini Projects
                        </h2>
                        {capgeminiProjects.map((project, index) => (
                          <div
                            key={index}
                            className="bg-gray-100 p-4 rounded-lg shadow-lg my-1"
                          >
                            <h3 className="font-playfair text-2xl mb-2">
                              {project.title}
                            </h3>
                            <ul className="list-disc list-inside space-y-1">
                              {project.tasks.map((task, taskIndex) => (
                                <li key={taskIndex}>{task}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-4">
                  <h3 className="font-playfair text-3xl mb-1">{exp.title}</h3>
                  <h4 className="text-md text-gray-600">
                    {exp.company} • {exp.period}
                  </h4>
                  <div className="flex justify-end w-full">
                    <button
                      className="bg-gray-200 px-4 py-2 rounded-lg mt-2"
                      onClick={() => togglePopup(index)}
                    >
                      Show more
                    </button>
                  </div>
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

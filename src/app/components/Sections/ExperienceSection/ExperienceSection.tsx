"use client";

import Image from "next/image";
import { capgeminiProjects, experiences } from "./experiences";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

const ExperienceSection = () => {
  useIntersectionObserver("scale-in-element");

  return (
    <section className="h-fit w-screen bg-gradient-bg flex items-center">
      <div className="max-w-6xl py-8 mx-auto">
        <h1 className="font-playfair text-5xl mb-9">Experience</h1>

        <div className="grid grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="scale-in-element relative group bg-white p-4 rounded-xl shadow-md h-40"
            >
              {exp.company.includes("Capgemini") ? (
                <div
                  className="group relative overflow-hidden transition-transform duration-300 
                hover:w-[200%] hover:h-[482%] hover:z-50 z-0 hover:-translate-x-[480px] hover:-translate-y-72"
                >
                  <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <div className="bg-white border border-gray-400 rounded-lg p-4 mx-auto space-y-4">
                      {capgeminiProjects.map((project, index) => (
                        <div
                          key={index}
                          className="bg-gray-100 p-4 rounded-lg shadow-lg "
                        >
                          <h2 className="font-playfair text-3xl w-[950px] mb-2">
                            {project.title}
                          </h2>
                          <ul className="list-disc list-inside space-y-1">
                            {project.tasks.map((task, taskIndex) => (
                              <li key={taskIndex}>{task}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="group-hover:opacity-0 transition-all duration-300 opacity-100">
                    <div className="flex ">
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
                          <button className="bg-gray-200 w-max ">
                            Show more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // <a href="#" className="group relative block">
                //   <span className="absolute inset-0"></span>
                //   <div className="relative flex h-full transform items-end bg-white transition-transform group-hover:-translate-x-72 group-hover:-translate-y-72">
                //     <div className="flex transition-opacity group-hover:absolute group-hover:opacity-0 ">
                //       <Image
                //         src="/Capgemini.svg"
                //         alt="Capgemini icon"
                //         width={70}
                //         height={70}
                //         className="object-contain mr-6"
                //       />
                //       <div className="flex-1">
                //         <h3 className="font-playfair text-3xl">{exp.title}</h3>
                //         <h4 className="text-md text-gray-600">
                //           {exp.company} • {exp.period}
                //         </h4>
                //         <div className="flex justify-end w-full">
                //           <button className="bg-gray-200 w-max ">
                //             Show more
                //           </button>
                //         </div>
                //       </div>
                //     </div>

                //     <div className="absolute bg-white border border-gray-400 rounded-lg p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100  left-1/2 transform -translate-x-1/2">
                //       <div className="mx-auto space-y-4">
                //         {capgeminiProjects.map((project, index) => (
                //           <div
                //             key={index}
                //             className="bg-gray-100 p-4 rounded-lg shadow-lg "
                //           >
                //             <h2 className="font-playfair text-3xl w-[950px] mb-2">
                //               {project.title}
                //             </h2>
                //             <ul className="list-disc list-inside space-y-1">
                //               {project.tasks.map((task, taskIndex) => (
                //                 <li key={taskIndex}>{task}</li>
                //               ))}
                //             </ul>
                //           </div>
                //         ))}
                //       </div>
                //     </div>
                //   </div>
                // </a>
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

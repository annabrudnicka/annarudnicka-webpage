"use client";

import Image from "next/image";
import Link from "next/link";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import { portfolioProjects } from "./portfolioTechnologies";

const PortfolioSection = () => {
  useIntersectionObserver(".scale-in-element");

  return (
    <section className="h-fit w-screen py-8">
      <div className="max-w-6xl mx-4 sm:mx-auto">
        <h1 className="font-playfair text-5xl sm:mb-5">Portfolio</h1>

        <div className="flex flex-col sm:flex-row">
          {portfolioProjects.map((project, index) => (
            <div key={index} className="sm:w-1/2 ">
              <div className="scale-in-element">
                <h3 className="font-playfair text-3xl text-center my-6 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-md text-gray-600 mb-3">
                  {project.description}
                </p>

                <div className="flex justify-center gap-4 mb-4">
                  <Link href={project.demoLink} target="_blank">
                    <button className="bg-gradient-bg hover:bg-neutral-600 border-gray-400 transition-all transform hover:scale-105">
                      Demo
                    </button>
                  </Link>
                  <Link href={project.codeLink} target="_blank">
                    <button className="bg-gradient-bg hover:bg-neutral-600 border-gray-400 transition-all transform hover:scale-105">
                      Code
                    </button>
                  </Link>
                </div>
              </div>

              <div className="scale-in-element">
                <article className="overflow-hidden rounded-2xl shadow-xl border border-gray-300 sm:w-96 mx-auto">
                  <div className="group relative h-[158px] sm:h-44 rounded-2xl">
                    <Image
                      alt={project.title}
                      src={project.imageSrc}
                      width={1100}
                      height={600}
                      className=" object-cover"
                    />
                  </div>
                </article>

                <div className="flex justify-center flex-wrap gap-3 my-3">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center bg-white shadow-md rounded-md h-10 p-3 w-fit"
                    >
                      {tech.src && (
                        <Image
                          src={tech.src}
                          alt={`${tech.name} icon`}
                          width={30}
                          height={30}
                          className="object-contain w-full h-full mr-2"
                        />
                      )}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

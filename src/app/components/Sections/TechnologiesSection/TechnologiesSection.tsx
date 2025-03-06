"use client";

import Image from "next/image";
import { technologies } from "./technologies";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

const TechnologiesSection = () => {
  useIntersectionObserver("scale-in-element");

  return (
    <section className="bg-gradient-bg h-fit w-screen">
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="font-playfair text-5xl mb-7">Technologies</h1>
        <div className="columns-2 gap-9">
          {Object.entries(technologies).map(([category, items]) => (
            <div
              key={category}
              className="scale-in-element break-inside-avoid mb-4"
            >
              <h2 className="font-playfair text-2xl mb-3 border-b pb-2">
                {category}
              </h2>
              <div className="flex flex-wrap gap-4">
                {items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center bg-white shadow-md rounded-md h-10 p-3 mr-2 mb-2 w-fit"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;

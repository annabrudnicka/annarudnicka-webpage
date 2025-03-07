"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioTechnologies } from "./portfolioTechnologies";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

const PortfolioSection = () => {
  useIntersectionObserver("scale-in-element");

  return (
    <section className="h-fit w-screen py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mx-auto max-w-screen-xl">
          <h1 className="font-playfair text-5xl mb-5">Portfolio</h1>

          <div className="grid grid-cols-2 gap-x-12 ">
            <div className="scale-in-element">
              <h3 className="font-playfair  mb-3 text-3xl text-center">
                Food Planner
              </h3>
              <p className="text-md text-gray-600 ">
                Search, find, and discover interesting recipes. Easily compose
                your shopping list by searching for ingredients and adding them
                to your fridge. Data is fetched from an external API and
                prepared accordingly.
              </p>
              <div className="flex justify-center gap-4 mb-4">
                <Link
                  href="https://food-planner-2024.vercel.app"
                  target="_blank"
                >
                  <button className="bg-gradient-bg hover:bg-neutral-600 border-gray-400 transition-all transform hover:scale-105">
                    Demo
                  </button>
                </Link>
                <Link
                  href="https://github.com/annaabramowicz/food-planner-2024"
                  target="_blank"
                >
                  <button className="bg-gradient-bg hover:bg-neutral-600 border-gray-400 transition-all transform hover:scale-105">
                    Code
                  </button>
                </Link>
              </div>
            </div>
            <div className="scale-in-element flex flex-col justify-between">
              <div>
                <h3 className="font-playfair mb-3 text-3xl text-center">
                  Eisenhower Matrix
                </h3>
                <p className="text-md text-gray-600 mb-3">
                  Manage your tasks effectively by categorizing them based on
                  urgency and importance. The Eisenhower Matrix helps you
                  prioritize your daily responsibilities with a simple
                  interface.
                </p>
              </div>

              <div className="flex justify-center gap-4 mb-4">
                <Link
                  href="https://food-planner-2024.vercel.app"
                  target="_blank"
                >
                  <button className="bg-gradient-bg hover:bg-neutral-600 border-gray-400 transition-all transform hover:scale-105">
                    Demo
                  </button>
                </Link>
                <Link
                  href="https://github.com/annaabramowicz/food-planner-2024"
                  target="_blank"
                >
                  <button className="bg-gradient-bg hover:bg-neutral-600 border-gray-400 transition-all transform hover:scale-105">
                    Code
                  </button>
                </Link>
              </div>
            </div>

            <div className="scale-in-element ">
              <article className="overflow-hidden rounded-2xl shadow-xl border border-gray-300 w-96 mx-auto">
                <div className="group relative h-44 rounded-2xl">
                  <Image
                    alt="Food Planner"
                    src="/foodPlannerImage.png"
                    width={1000}
                    height={1000}
                    className="w-full object-cover"
                  />
                </div>
              </article>

              <div className="flex justify-center flex-wrap gap-3 mt-3">
                {portfolioTechnologies.FoodPlanner.map((tech) => (
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
            <div className="scale-in-element">
              <article className=" rounded-2xl shadow-xl border border-gray-300 w-96 mx-auto">
                <div className="group relative block h-44 overflow-hidden rounded-2xl">
                  <Image
                    alt="Eisenhower Matrix"
                    src="/eisenhowerMatrixImage.png"
                    width={1000}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </article>

              <div className="flex justify-center flex-wrap gap-3 mt-3">
                {portfolioTechnologies.EisenhowerMatrix.map((tech) => (
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
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

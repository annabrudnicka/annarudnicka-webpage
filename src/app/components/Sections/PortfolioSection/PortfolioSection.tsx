"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { portfolioTechnologies } from "./portfolioTechnologies";

const PortfolioSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".scale-in-element");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    elements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <section className="h-fit w-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mx-auto max-w-screen-xl py-12">
          <h1 className="text-4xl">Portfolio</h1>

          <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-6">
            <h3 className="mt-0.5 text-2xl text-gray-900">Eisenhower Matrix</h3>
            <h3 className="mt-0.5 text-2xl text-gray-900">Food Planner</h3>
            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg border">
              <div className="group relative block bg-black">
                <Image
                  alt="Food Planner Image"
                  src="/foodPlannerImage.png"
                  width={400}
                  height={400}
                  className="absolute inset-0 h-full w-full object-cover  transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 ">
                  <div className="flex justify-center translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 mt-32">
                    <Link
                      href="https://food-planner-2024.vercel.app"
                      target="_blank"
                    >
                      <button className="bg-neutral-700 hover:bg-neutral-500 text-white mr-5">
                        Demo
                      </button>
                    </Link>

                    <Link
                      href="https://github.com/annaabramowicz/food-planner-2024"
                      target="_blank"
                    >
                      <button className="bg-neutral-700 hover:bg-neutral-500 text-white">
                        Code
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4">
                <p className="my-2  text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
                <div className="flex justify-center flex-wrap">
                  {portfolioTechnologies.EisenhowerMatrix.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center h-8 p-2 w-fit"
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
            </article>
            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg border">
              <div className="group relative block bg-black">
                <Image
                  alt="Food Planner Image"
                  src="/foodPlannerImage.png"
                  width={400}
                  height={400}
                  className="absolute inset-0 h-full w-full object-cover  transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 ">
                  <div className="flex justify-center translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 mt-32">
                    <Link
                      href="https://food-planner-2024.vercel.app"
                      target="_blank"
                    >
                      <button className="bg-neutral-700 hover:bg-neutral-500 text-white mr-5">
                        Demo
                      </button>
                    </Link>

                    <Link
                      href="https://github.com/annaabramowicz/food-planner-2024"
                      target="_blank"
                    >
                      <button className="bg-neutral-700 hover:bg-neutral-500 text-white">
                        Code
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="my-2  text-gray-500">
                  Search, find, and discover interesting recipes. You can also
                  easily compose your shopping list by searching for a variety
                  of ingredients and adding them to your fridge. Data is
                  fetching from an external API and prepared appropriately.
                </p>
                <div className="flex justify-center flex-wrap mt-14">
                  {portfolioTechnologies.FoodPlanner.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center h-8 p-2 w-fit"
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
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

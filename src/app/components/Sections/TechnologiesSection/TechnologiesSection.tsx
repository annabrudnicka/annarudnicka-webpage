import Image from "next/image";
import { technologies } from "./technologies";

const TechnologiesSection = () => {
  return (
    <section className="bg-gradient-bg h-fit w-screen">
      <div className="max-w-5xl mx-auto py-8">
        <h1 className={` text-4xl mb-7`}>Technologies</h1>
        <div className="columns-2 gap-9">
          {Object.entries(technologies).map(([category, items]) => (
            <div key={category} className="break-inside-avoid mb-3">
              <h2 className="text-lg mb-3 border-b pb-2">{category}</h2>
              <div className="flex flex-wrap gap-3">
                {items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center bg-white shadow-md rounded-md h-10 p-3 mr-1 mb-1 w-fit"
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

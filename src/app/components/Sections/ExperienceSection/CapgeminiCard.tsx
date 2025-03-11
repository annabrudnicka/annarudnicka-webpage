import { CapgeminiCardProps } from "@/app/types";
import Image from "next/image";

export const CapgeminiCard = ({
  exp,
  index,
  togglePopup,
}: CapgeminiCardProps) => (
  <div className="flex items-start border border-gray-600 rounded-xl h-[inherit] p-3">
    <Image
      src="/Capgemini.svg"
      alt="Capgemini icon"
      width={70}
      height={70}
      className="object-contain mr-6 h-16 w-auto"
    />
    <div className="flex-1 flex flex-col justify-between sm:h-[120px] ">
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

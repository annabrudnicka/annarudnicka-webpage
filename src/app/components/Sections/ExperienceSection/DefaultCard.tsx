import { DefaultCardProps } from "@/app/types";

export const DefaultCard = ({ exp, index, togglePopup }: DefaultCardProps) => (
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

import { PopupProps } from "@/app/types";

export const Popup = ({ exp, closePopup }: PopupProps) => (
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

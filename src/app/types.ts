type Task = {
  description: string;
};

type Project = {
  title: string;
  methodology: string;
  industry: string;
  tasks: Task[];
};

type Experience = {
  title: string;
  company: string;
  period: string;
  projects: Project[];
};

export type ExperienceCardProps = {
  exp: Experience;
  index: number;
  togglePopup: (index: number) => void;
  activePopup: number | null;
};

export type PopupProps = {
  exp: Experience;
  closePopup: () => void;
};

export type CapgeminiCardProps = {
  exp: Experience;
  index: number;
  togglePopup: (index: number) => void;
};

export type DefaultCardProps = {
  exp: Experience;
  index: number;
  togglePopup: (index: number) => void;
};

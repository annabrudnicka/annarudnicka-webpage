export const portfolioTechnologies = {
  EisenhowerMatrix: [
    { name: "Next.js", src: "/docs/logos/Next.js.svg" },
    { name: "MongoDB", src: "/docs/logos/MongoDB.svg" },
    { name: "TypeScript", src: "/docs/logos/TypeScript.png" },
    { name: "Pnpm", src: "/docs/logos/Pnpm.png" },
    { name: "React", src: "/docs/logos/React.png" },
    { name: "TailwindCSS", src: "/docs/logos/TailwindCSS.svg" },
  ],
  FoodPlanner: [
    { name: "React", src: "/docs/logos/React.png" },
    { name: "Redux", src: "/docs/logos/Redux.svg" },
    { name: "TypeScript", src: "/docs/logos/TypeScript.png" },
    { name: "Yarn", src: "/docs/logos/Yarn.svg" },
    { name: "Node.js", src: "/docs/logos/Node.js.png" },
    { name: "Express", src: "/docs/logos/Express.png" },
    { name: "Vitest", src: "/docs/logos/Vitest.svg" },
    { name: "ChakraUI", src: "/docs/logos/ChakraUI.png" },
  ],
};

export const portfolioProjects = [
  {
    title: "Food Planner",
    description:
      "Search, find, and discover interesting recipes. Easily compose your shopping list by searching for ingredients and adding them to your fridge. Data is fetched from an external API and prepared accordingly.",
    imageSrc: "/foodPlannerImage.png",
    demoLink: "https://food-planner-2024.vercel.app",
    codeLink: "https://github.com/annaabramowicz/food-planner-2024",
    technologies: portfolioTechnologies.FoodPlanner,
  },
  {
    title: "Eisenhower Matrix",
    description:
      "Manage your tasks effectively by categorizing them based on urgency and importance. The Eisenhower Matrix helps you prioritize your daily responsibilities with a simple interface.",
    imageSrc: "/eisenhowerMatrixImage.png",
    demoLink: "https://food-planner-2024.vercel.app",
    codeLink: "https://github.com/annaabramowicz/eisenhower-matrix",
    technologies: portfolioTechnologies.EisenhowerMatrix,
  },
];

import { useEffect } from "react";

const useIntersectionObserver = (className: string) => {
  useEffect(() => {
    const elements = document.querySelectorAll(className);

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-scale-in");
          entry.target.classList.add("opacity-0");
          entry.target.classList.add("scale-0");

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0,
    });
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [className]);
};

export default useIntersectionObserver;

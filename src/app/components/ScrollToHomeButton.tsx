"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const ScrollToHomeButton = () => {
  return (
    <div className="fixed bottom-6 right-6 bg-customColor hover:bg-customColorHover rounded-full cursor-pointer">
      <ScrollLink to="home" smooth={true} duration={1000}>
        <Image
          src="/arrowUp.png"
          alt="arrow up icon"
          width={15}
          height={15}
          className="m-3"
        />
      </ScrollLink>
    </div>
  );
};

export default ScrollToHomeButton;

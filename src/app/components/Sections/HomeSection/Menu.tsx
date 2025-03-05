"use client";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Menu = () => {
  return (
    <ul className="flex justify-end items-center space-x-9 h-16">
      <li className="hover:text-gray-500 cursor-pointer">
        <ScrollLink to="technologies" smooth={true} duration={1000}>
          Technologies
        </ScrollLink>
      </li>

      <li className="hover:text-gray-500 cursor-pointer">
        <ScrollLink to="portfolio" smooth={true} duration={1000}>
          Portfolio
        </ScrollLink>
      </li>

      <li className="hover:text-gray-500 cursor-pointer">
        <ScrollLink to="experience" smooth={true} duration={1000}>
          Experience
        </ScrollLink>
      </li>

      <li className="hover:text-gray-500 cursor-pointer">
        <ScrollLink to="contact" smooth={true} duration={1000}>
          Contact
        </ScrollLink>
      </li>

      <li className="flex items-center">
        <Link
          href="https://www.linkedin.com/in/annababramowicz"
          target="_blank"
        >
          <Image
            src="/linkedin.png"
            alt="LinkedIn icon"
            width={25}
            height={25}
          />
        </Link>
      </li>

      <li className="flex items-center">
        <Link href="https://www.github.com/annaabramowicz" target="_blank">
          <Image src="/github.png" alt="Github icon" width={30} height={30} />
        </Link>
      </li>
    </ul>
  );
};

export default Menu;

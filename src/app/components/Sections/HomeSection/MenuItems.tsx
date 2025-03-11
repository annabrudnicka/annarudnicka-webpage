"use client";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const MenuItems = ({ onClick }: { onClick?: () => void }) => {
  return (
    <ul className="flex flex-col sm:flex-row justify-end items-center bg-gray-100 sm:bg-white sm:space-x-9 sm:h-16">
      <li className="hover:text-gray-500 cursor-pointer h-12 leading-[50px]">
        <ScrollLink
          onClick={onClick}
          to="technologies"
          smooth={true}
          duration={1000}
        >
          Technologies
        </ScrollLink>
      </li>
      <span className="sm:hidden block h-[0.5px] w-[120vw] -ml-10 bg-zinc-300"></span>

      <li className="hover:text-gray-500 cursor-pointer h-12 leading-[50px]">
        <ScrollLink
          onClick={onClick}
          to="portfolio"
          smooth={true}
          duration={1000}
        >
          Portfolio
        </ScrollLink>
      </li>
      <span className="sm:hidden block h-[0.5px] w-[120vw] -ml-10 bg-zinc-300"></span>

      <li className="hover:text-gray-500 cursor-pointer h-12 leading-[50px]">
        <ScrollLink
          onClick={onClick}
          to="experience"
          smooth={true}
          duration={1000}
        >
          Experience
        </ScrollLink>
      </li>
      <span className="sm:hidden block h-[0.5px] w-[120vw] -ml-10 bg-zinc-300"></span>

      <li className="hover:text-gray-500 cursor-pointer h-12 leading-[50px]">
        <ScrollLink
          onClick={onClick}
          to="contact"
          smooth={true}
          duration={1000}
        >
          Contact
        </ScrollLink>
      </li>
      <span className="sm:hidden block h-[0.5px] w-[120vw] -ml-10 bg-zinc-300"></span>

      <li className="flex items-center h-12 leading-[50px]">
        <Link
          href="https://www.linkedin.com/in/annababramowicz"
          target="_blank"
        >
          <Image
            src="/linkedin.png"
            alt="LinkedIn icon"
            width={25}
            height={25}
            onClick={onClick}
          />
        </Link>
      </li>
      <span className="sm:hidden block h-[0.5px] w-[120vw] -ml-10 bg-zinc-300"></span>

      <li className="flex items-center h-12 leading-[50px]">
        <Link href="https://www.github.com/annaabramowicz" target="_blank">
          <Image
            src="/github.png"
            alt="Github icon"
            width={30}
            height={30}
            onClick={onClick}
          />
        </Link>
      </li>
    </ul>
  );
};

export default MenuItems;

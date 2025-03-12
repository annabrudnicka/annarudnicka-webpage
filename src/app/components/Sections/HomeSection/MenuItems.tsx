"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { menuLinks, socialLinks } from "./menuItemsDetails";

const MenuItems = ({ onClick }: { onClick?: () => void }) => {
  return (
    <ul className="flex flex-col justify-center sm:flex-row sm:justify-end items-center bg-gray-100 sm:bg-white sm:space-x-9 sm:h-16">
      {menuLinks.map((link) => (
        <li key={link.to}>
          <div className="flex justify-center hover:text-gray-500 cursor-pointer h-12 leading-[50px]">
            <ScrollLink onClick={onClick} to={link.to} smooth duration={1000}>
              {link.name}
            </ScrollLink>
          </div>
          <span className="sm:hidden block h-[0.5px] w-[120vw] -ml-10 bg-zinc-300"></span>
        </li>
      ))}

      {socialLinks.map((social) => (
        <li key={social.href}>
          <div className="flex flex-col sm:flex-row justify-center items-center h-12 leading-[50px]">
            <Link href={social.href} target="_blank">
              <Image {...social} onClick={onClick} alt={social.alt} />
            </Link>
          </div>
          <span className="sm:hidden block h-[0.5px] w-[120vw] -ml-10 bg-zinc-300"></span>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;

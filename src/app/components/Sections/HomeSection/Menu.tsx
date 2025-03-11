"use client";

import { useState } from "react";
import Image from "next/image";
import MenuItems from "./MenuItems";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="sm:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 h-10 w-10">
          {isOpen ? (
            <div className="">x</div>
          ) : (
            <Image src="/menu.png" alt="menu icon" width={30} height={30} />
          )}
        </button>
      </div>

      <div className="hidden sm:flex justify-end items-center space-x-9 h-16">
        <MenuItems />
      </div>

      {isOpen && (
        <div className="absolute top-32 left-0 w-full bg-white shadow-lg z-10 sm:hidden">
          <MenuItems onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Menu;

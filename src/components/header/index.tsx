"use client";

import { Button } from "@/src/base-components/button";
import { Text } from "@/src/base-components/text";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative   z-10  ">
      <div className="w-full flex items-center justify-between border-b border-b-white/10 h-24 p-8">
        <Text className="font-jarkarta-sans">Name</Text>
        <Button
          className="cursor-pointer transition-all"
          leftIcon={isMenuOpen ? <X /> : <Menu />}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          Menu
        </Button>
      </div>

      <div
        className={`w-full fixed -z-10  left-0 top-0 h-screen bg-black transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      ></div>
    </header>
  );
};

export default Header;

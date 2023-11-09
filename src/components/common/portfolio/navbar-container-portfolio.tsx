"use client";

import React from "react";
import { Button } from "@/ui/button";
import { ChevronDown, Search, X } from "lucide-react";
import { Input } from "@/ui/input";
import NextImage from "next/image";
import zynkLogo from "@/public/zynk-white-logo.svg"
import NextLink from "next/link";

interface NavbarContainerPortfolioProps {}

const navLinks = [
  {
    id: 1,
    text: "O Zynk",
    href: "",
  },
  {
    id: 2,
    text: "Para você",
    href: "",
  },
  {
    id: 3,
    text: "Empresas ",
    href: "",
  },
  {
    id: 4,
    text: "Conteúdos",
    href: "",
  },
];

const NavbarContainerPortfolio: React.FC<
  NavbarContainerPortfolioProps
> = ({}) => {
  const menuRef = React.useRef<HTMLDivElement>(null);

  const [showMenu, setIsShowMenu] = React.useState<boolean>(false);
  const [activeInput, setActiveInput] = React.useState<boolean>(false);

  const toggleMenu = () => {
    setIsShowMenu(true);
  };

  const handleActiveInput = () => {
    setActiveInput(!activeInput);
  };

  React.useEffect(() => {
    const handleMouseClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleMouseClick);

    return () => {
      document.removeEventListener("mousedown", handleMouseClick);
    };
  }, []);

  const renderNavLink = (link: any) => {
    return (
      <li
        key={link.id}
        className="group flex items-center gap-2 text-sm font-medium"
        onMouseEnter={toggleMenu}
      >
        {link.text}
        <ChevronDown
          size={18}
          className="transition-all group-hover:rotate-[180deg]"
        />
      </li>
    );
  };

  const renderNavList = (links: any) => {
    return (
      <ul className="flex items-center gap-4">
        {links.map((link: any) => renderNavLink(link))}
      </ul>
    );
  };

  return (
    <div className="sticky top-0 flex flex-col w-full z-10 shadow-sm">
      <div className="max-w-[1300px] px-4 py-2 w-full mx-auto flex items-center justify-between">
        <div className="flex gap-6 items-center">
          <div className="flex gap-4">
            <NextImage src={zynkLogo} alt="Zynk Bank logo brand." className="w-[50px]"/>
            {/* {<div className="flex flex-col gap-2">
              <h1>Zynk.</h1>
            </div>} */}
          </div>
          <div className="relative items-center gap-6 flex">
            {renderNavList(navLinks)}
            <Input
              placeholder="Pesquisar..."
              className={`absolute transition-all right-0 z-20 bg-white rounded-lg ${
                activeInput ? "w-full opacity-[1]" : "w-0 opacity-0"
              }`}
            />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Button
            onClick={handleActiveInput}
            className="bg-neutral-100 text-neutral-950 rounded-full w-[40px] h-[40px] p-[0.6rem] shadow-md hover:bg-neutral-200"
          >
            {activeInput ? <X size={26} /> : <Search size={26} />}
          </Button>
          <div className="flex gap-4 items-center">
            <NextLink href="/access" className="py-[0.5rem] px-[0.8rem] rounded-md text-sm text-white bg-neutral-950 border border-solid border-neutral-950">Abra sua conta</NextLink>
            <NextLink href="/access" className="py-[0.5rem] px-[0.8rem] rounded-md text-sm border border-solid border-neutral-950 bg-transparent text-neutral-950 hover:bg-neutral-100">
              Accessar
            </NextLink>
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        className={`absolute top-[68px] w-full transition-all ${
          showMenu ? "h-[400px] opacity-100" : "h-0 opacity-0"
        }  bg-neutral-300`}
      ></div>
    </div>
  );
};

export default NavbarContainerPortfolio;

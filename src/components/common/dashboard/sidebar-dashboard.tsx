"use client";

import React from "react";
import logo from "@/public/zynk-black-logo.svg";
import NextImage from "next/image";
import NextLink from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  SIDEBAR_ROUTES_LINKS,
  SIDEBAR_CONFIG_LINKS,
  SidebarLinksProps,
} from "@/src/data/sidebarLinks";
import { Card, CardContent } from "@/ui/card";
import { Button } from "@/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

interface SidebarDashboardProps {}

const SidebarDashboard: React.FC<SidebarDashboardProps> = ({}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [showSubList, setShowSubList] = React.useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setShowSubList(false);
  };

  const toggleShowSubList = () => {
    setShowSubList(!showSubList);
  };

  const renderSidebarLink = (link: SidebarLinksProps) => {
    const hasSublist = link.subList && link.subList.length > 0;

    const linkElement = (
      <Tooltip>
        <TooltipTrigger>
          <NextLink
            className={`${
              isOpen ? "flex-initial" : "justify-center"
            } flex gap-2 items-center px-2 text-[15px] font-medium hover:text-neutral-950 rounded-lg py-3 w-full  
     text-neutral-800 hover:bg-neutral-100
     `}
            href={link.href}
          >
            {<link.icon />}
            <span
              className={`
                  transition-all  ${
                    isOpen
                      ? "opacity-100 visible "
                      : "opacity-0 invisible absolute z-[-2]"
                  }`}
            >
              {link.text}
            </span>
          </NextLink>
          <TooltipContent side="right">{link.text}</TooltipContent>
        </TooltipTrigger>
      </Tooltip>
    );

    const buttonElement = (
      <Tooltip>
        <TooltipTrigger>

            <Button
              onClick={toggleShowSubList}
              className={`bg-transparent shadow-none hover:bg-transparent${
                isOpen ? "flex-initial" : "justify-center"
              } flex justify-between px-2 text-[15px] font-medium text-left rounded-lg py-3 w-full text-neutral-800 hover:bg-neutral-100`}
            >
              <span
                className={`
                  transition-all  ${
                    isOpen
                      ? "opacity-100 visible "
                      : "opacity-0 invisible absolute z-[-2]"
                  }`}
              >
                {link.text}
              </span>
              <ChevronDown
                className={`transition-all ${isOpen ? "m-0" : "mx-auto"} ${
                  showSubList ? "rotate-180" : "rotate-0"
                }`}
              />
            </Button>

          <TooltipContent side="right">Cartão de Crédito</TooltipContent>
        </TooltipTrigger>
      </Tooltip>
    );

    return (
      <li className="flex flex-col " key={link.id}>
        {hasSublist ? buttonElement : linkElement}
        <ul
          className={` transition-all ${
            showSubList
              ? "opacity-100 visible h-full"
              : "h-0 opacity-0  invisible"
          }`}
        >
          {link.subList?.map((subLink) => (
            <li className="flex flex-col" key={subLink.id}>
              <Tooltip>
                <TooltipTrigger>
                  <NextLink
                    className={`${
                      isOpen ? "flex-initial" : "justify-center px-0 pl-0"
                    } flex gap-2 items-center px-2 pl-4 text-[15px] font-medium hover:text-neutral-950 hover:bg-neutral-100 rounded-lg py-3 w-full`}
                    href={subLink.href}
                  >
                    {<subLink.icon />}
                    <span
                      className={`
                  transition-all  ${
                    isOpen
                      ? "opacity-100 visible "
                      : "opacity-0 invisible absolute z-[-2]"
                  }`}
                    >
                      {subLink.text}
                    </span>
                  </NextLink>
                  <TooltipContent
                    className={`${
                      isOpen ? "invisible opacity-0" : "visible opacity-100"
                    }`}
                    side="right"
                  >
                    {subLink.text}
                  </TooltipContent>
                </TooltipTrigger>
              </Tooltip>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  const renderSidebarList = (title: string, links: SidebarLinksProps[]) => {
    return (
      <ul className={`inline-block w-full`}>
        <h1
          className={`uppercase  font-medium  mb-4 ${
            isOpen
              ? "text-[12px] text-neutral-500"
              : "text-[8px] text-neutral-800 text-center border-b border-solid border-neutral-700 py-2"
          }`}
        >
          {title}
        </h1>
        {links.map((link) => renderSidebarLink(link))}
      </ul>
    );
  };

  return (
    <aside
      className={`sticky top-0 h-[100vh] bg-white flex-col transition-all shadow-md ${
        isOpen ? "w-[300px]" : "w-[90px] items-center"
      }`}
    >
      {/* Header */}
      <div
        className={`relative mt-4 flex gap-2 items-center ${
          isOpen ? "p-4 px-6 " : "p-0"
        } w-full`}
      >
        <Button
          onClick={toggleSidebar}
          className={`w-[40px] h-[40px] p-0  rounded-full absolute ${
            isOpen ? "left-[18px]" : "left-[24px]"
          }  z-20 flex gap-4 justify-left items-center bg-transparent shadow-none hover:bg-transparent`}
        >
          <NextImage
            src={logo}
            alt="Zynk Bank logo brand."
            width={40}
            height={40}
            className="object-cover"
          />
        </Button>
        <h1
          className={`w-full text-lg font-light transform text-neutral-800 delay-150 transition-all ${
            isOpen
              ? "translate-x-0 opacity-100 pl-[50px]"
              : "translate-x-[-70px] opacity-0"
          }`}
        >
          Zynk Bank.
        </h1>
      </div>
      {/* Body */}
      <div
        className={`relative flex flex-col gap-10  ${
          isOpen ? "p-4 px-6 " : "px-2 pt-14"
        } w-full`}
      >
        {renderSidebarList("Menu", SIDEBAR_ROUTES_LINKS)}
        {renderSidebarList("Configurações", SIDEBAR_CONFIG_LINKS)}
      </div>
      {/* Footer */}
      <div className="w-full p-4 mt-4">
        <Card
          className={`rounded-sm transition-all ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <CardContent className="flex flex-col gap-4 p-2 py-3 ">
            <div className="flex gap-2 items-center">
              <NextImage
                src="https://avatars.githubusercontent.com/u/99546472?v=4"
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col ">
                <h1 className="text-sm font-bold text-neutral-950">
                  Matheus Figueiredo
                </h1>
                <div className="flex gap-1 items-center">
                  <div className="w-[10px] h-[10px] bg-emerald-500 rounded-full">
                    <div
                      className={`w-[10px] h-[10px] rounded-full bg-emerald-400 animate-ping`}
                    />
                  </div>
                  <span className="text-sm text-neutral-500 ">Cliente</span>
                </div>
              </div>
            </div>
            <Button className="w-full flex transition-all justify-center items-center hover:gap-2">
              <span>Sair</span>
              <ChevronRight size={18} />
            </Button>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
};

export default SidebarDashboard;

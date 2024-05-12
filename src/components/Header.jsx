import React, { useState } from "react";
import { neroErc } from "../assets";
import { navigation, navigationSosmed } from "../constant";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";

import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { HamburgerMenu } from "./design/Header";
import { useLocation } from "react-router-dom";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-6 lg:px-7.5 xl:px-10 max-lg:py-4">
        <div className="flex items-center gap-2">
          <img src={neroErc} width={65} height={65} alt="logo-brand" />
          <p className="font-sans font-semibold text-4xl">neroErc</p>
        </div>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="overflow-y-auto lg:overflow-hidden w-full">
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-5 cursor-pointer px-6 py-6 md:py-8 lg:text-sm lg:text-n-2 lg:-mr-1 lg:font-semibold lg:hover:text-n-1 lg:leading-5
                ${
                  item.isOnlyMobile ? "flex items-center gap-4 lg:hidden" : ""
                }`}
                >
                  {item.title}
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.icon}
                      width={25}
                      height={25}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
          <HamburgerMenu />
        </nav>

        <div className="hidden lg:flex items-center gap-2 ml-auto md:gap-4 lg:gap-6">
          {navigationSosmed.map((item) => (
            <a key={item.id}>
              <img src={item.url} width={30} height={30} alt={item.title} />
            </a>
          ))}
        </div>

        <Button className={"hidden ml-[3rem] lg:flex"} href={"#launchapp"}>
          Launch App
        </Button>

        <Button
          className={"ml-auto lg:hidden"}
          px={"px-3"}
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;

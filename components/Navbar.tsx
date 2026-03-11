"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// import constants from constants.ts
import { NAV_LINKS } from "@/constants/constants";

import Btn from "./Btn";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* Nav Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        {/* <Image src="/trip.com-logo.png" alt="logo" width={74} height={29} /> */}
      </Link>

      {/* Nav Links */}
      <ul className={`hidden h-full gap-12 lg:flex `}>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.ref}
            key={link.key}
            className="text-[16px] hover:font-bold text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-green-50"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* register btn */}
      <div className="hidden lg:flex items-center justify-center">
        <Btn
          text="Register"
          icon="/user.svg"
          style="btn_dark_green"
          type="button"
        />
      </div>

      {/* toggle menu btn */}
      <Image
        src="menu.svg"
        alt="menu-btn"
        width={32}
        height={32}
        className="cursor-pointer inline-block lg:hidden"
        onClick={() => setToggleMenu((prev) => !prev)}
      />
    </nav>
  );
};

export default Navbar;

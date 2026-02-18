import Link from "next/link";
import Image from "next/image";

// Footer Stuff
import {
  FOOTER_LINKS,
  FOOTER_CONTACT_INFO,
  SOCIALS,
} from "@/constants/constants";
import { group } from "console";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          {/* footer logo */}
          <Link href={"/"} className="mb-10 mt-7">
            <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={29} />
          </Link>

          {/* footer links groups */}
          {/* first group */}
          <div className="flex flex-wrap gap-10 md:flex-1 sm:justify-between">
            {FOOTER_LINKS.map((group) => (
              <div className="flex flex-col gap-5" key={group.title}>
                <h4 className="bold-18 whitespace-nowrap mt-7">
                  {group.title}
                </h4>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {group.links.map((link) => (
                    <Link href={"/"} key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* second group */}
          <div className="flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap mt-7">
              {FOOTER_CONTACT_INFO.title}
            </h4>
            {FOOTER_CONTACT_INFO.links.map((links) => (
              <p
                className="regular-14 text-gray-30 flex gap-4"
                key={links.label}
              >
                {links.label}:
                <Link href={""} className="font-bold text-black">
                  {links.value}
                </Link>
              </p>
            ))}
          </div>

          {/* socials icons group */}
          <div className="flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap mt-7">{SOCIALS.title}</h4>
            <div className="flex gap-5">
              {SOCIALS.links.map((ico) => (
                <Image
                  src={ico}
                  alt="icon"
                  width={30}
                  height={30}
                  unoptimized={true}
                  key={ico}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="border bg-gray-20/30" />
        <p className="regular-16 text-gray-50 text-center">
          2026 HiLink | All Rights Reserved ©
        </p>
      </div>
    </footer>
  );
};

export default Footer;

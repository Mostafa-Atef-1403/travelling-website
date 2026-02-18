"use client";
import "swiper/css";

import { CAMPS, PEOPLE_URL } from "@/constants/constants";
import Image from "next/image";

const Camp = () => {
  return (
    <section
      className="2xl:mx-auto 2xl:max-w-[1440px]
      relative flex flex-col px-4 py-10 lg:mb-10 lg:py-20 xl:mb-20"
    >
      <div
        className="hide-scrollbar flex justify-start items-start gap-8 overflow-x-auto
      min-h-[340px] w-full lg:min-h-[400px] xl:min-h-[640px]"
      >
        {/* inserting slides */}
        {CAMPS.map((camp) => (
          // each card (slide)
          <div
            className={`h-[320px] w-full rounded-4xl md:h-[400px]
            md:w-[500px] lg:h-[500px] lg:w-[700px] shrink-0
            ${camp.bg} bg-cover bg-no-repeat bg-center`}
            key={camp.id}
          >
            {/* Slide content */}
            <div
              className="h-full rounded-4xl p-6 lg:px-20 lg:py-10 flex flex-col justify-between
            items-start bg-linear-to-b from-green-90/80 to-green-50/40 "
            >
              {/* first col u know */}
              <div className="flexCenter gap-4">
                {/* icon */}
                <div className="rounded-full bg-green-50 p-4">
                  <Image
                    src="/folded-map.svg"
                    alt="map"
                    width={28}
                    height={28}
                  />
                </div>
                {/* camp info */}
                <div className="flex flex-col gap-1">
                  <h4 className="bold-18 text-white">{camp.title}</h4>
                  <p className="regular-14 text-white">{camp.sub}</p>
                </div>
              </div>
              {/* second col */}
              <div className="text-white flex items-center gap-2.5">
                <span className="flex -space-x-4 overflow-hidden">
                  {PEOPLE_URL.map((p) => (
                    <Image
                      className="inline-block rounded-full"
                      src={p.pfp}
                      alt="I don't know"
                      key={p.id}
                      width={35}
                      height={35}
                    />
                  ))}
                </span>
                <span className="bold-16 md:bold-20">50+ Joined</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* banner */}
      <div className="flexEnd mt-10 px-4 md:px-6">
        <div
          className="bg-green-50 p-6 md:p-8 lg:p-10 w-full
          relative text-white flex items-start sm:max-h-[301px] h-auto md:items-center
        justify-between gap-6 rounded-2xl"
        >
          {/* Left side - Text content */}
          <div className="flex-1 flex flex-col gap-4 md:gap-5 z-10 md:max-w-[60%]">
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] leading-tight">
              <strong>Feeling Lost</strong> And Not Knowing The Way?
            </h2>
            <p
              className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]
            text-white/90 w-[90%] md:w-[85%] lg:w-[75%]"
            >
              Stay at curated nature retreats designed for hikers, campers, and
              outdoor lovers. From sunrise by the lake to sunset above the
              treeline, we match you with camps that are safe, scenic, and ready
              for your next story.
            </p>
            {/* quote image - under text */}
            <div
              className="absolute bottom-10 right-4
            w-20 h-20
            lg:w-48 lg:h-48
            md:w-32 md:h-32
            sm:w-24 sm:h-24
              "
            >
              <Image src="/quote.svg" alt="Quote" fill />
            </div>
          </div>

          {/* Right side*/}
          <div
            className="hidden sm:block relative z-10
          shrink-0 md:absolute md:right-0 md:bottom-0"
          >
            <Image
              src="/phone_banner_1.png"
              alt="phone"
              width={300}
              height={400}
              className="w-[200px] h-auto sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[500px]
              2xl:w-[620px] object-contain translate-y-4 md:translate-y-14 lg:translate-y-12"
              quality={100}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Camp;

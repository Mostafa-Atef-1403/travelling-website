import Image from "next/image";

// features data
import { FEATURES } from "@/constants/constants";

function Features() {
  return (
    <section className="flexCenter flex-col bg-feature-bg bg-center bg-no-repeat overflow-hidden py-24">
      <div className="max-container padding-container w-full flex justify-end relative">
        {/* Phone img pop up */}
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
            unoptimized={true}
          />
        </div>

        <div className="z-20 flex flex-col w-full lg:w-[60%]">
          <div className="relative">
            {/* features header */}
            <Image src={"/camp.svg"} alt="camp" width={50} height={50} />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>

          {/* features cards */}
          <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
            {FEATURES.map((card) => (
              <li
                key={card.title}
                className="flex flex-1 flex-col items-start w-full my-2.5"
              >
                {/* feature icon */}
                <div
                  className={`bg-${card.variant}-50 rounded-full p-4 lg:p-7`}
                >
                  <Image src={card.icon} alt="icon" width={28} height={28} />
                </div>

                {/* feature title */}
                <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                  {card.title}
                </h2>

                {/* feature desc */}
                <p className="regular-16 mt-5 bg-white/80">
                  {card.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;

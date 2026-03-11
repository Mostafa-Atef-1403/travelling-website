import Image from "next/image";
import Btn from "./Btn";

const Hero = () => {
  return (
    <section
      className="flex flex-col gap-20 py-10 pb-32
      max-container padding-container md:gap-28 lg:py-20
      xl:flex-row"
      id="home"
    >
      {/* self closing div for showing the background pattern img */}
      <div className="hero-map" />

      {/* Text and stuff in left col */}
      <div className="relative z-20 flex flex-col flex-1 xl:w-1/2">
        {/* sticky lil img  */}
        <Image
          src={"/camp.svg"}
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-45px] w-10 lg:w-[50px]"
          alt="camp"
        />

        {/* highlight  */}
        <h1 className="lg:max-w-[650px] bold-52 lg:text-[88px]">
          Find your next unforgettable adventure.
        </h1>

        {/* summary */}
        <p className="regular-16 mt-6 text-gray-30 lg:max-w-[520px]">
          Explore curated destinations, hidden gems, and unforgettable
          experiences tailored just for you. Compare trips, book in minutes, and
          start your next journey with confidence.
        </p>

        {/* rankings */}
        <div className="my-11 flex flex-wrap gap-5">
          {/* instead of putting stars manually */}
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Image
                  src="star.svg"
                  alt="sar"
                  key={i}
                  width={24}
                  height={24}
                />
              ))}
          </div>
          {/* reviews and shi */}
          <p className="bold-16 lg:bold-20 text-blue-70">
            189k{" "}
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        {/* Hero Btns  */}
        <div className="flex gap-3 w-full sm:flex-row flex-col">
          <Btn type="button" text="Download App" style="btn_green" />
          <Btn
            type="button"
            text="How We Work?"
            icon="/play.svg"
            style="btn_white_text"
          />
        </div>
      </div>

      {/* rest of stuff related to the right col */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            {/* first element */}
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src={"/close.svg"} alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white mb-3.5">Aguas Calientes</p>

            <div className="flexBetween gap-4">
              {/* second element */}
              <div className="flex flex-col">
                <p className="block text-gray-20 regular-16">Distance</p>
                <p className="bold-20 text-white">69 km</p>
              </div>

              {/* third element */}
              <div className="flex flex-col">
                <p className="block text-gray-20 regular-16">Elevation</p>
                <p className="bold-20 text-white">2.040 km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

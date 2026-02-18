import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      {/* first part */}
      <div className="padding-container max-container w-full pb-24">
        <Image src={"/camp.svg"} alt="alt" width={50} height={50} />
        <p className="uppercase regular-18 mb-3 text-green-50">
          We are here for You!
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You To Easy Path
          </h2>
          <p className="regular-16 text-gray-30">
            From trailheads to camp spots—we point you in the right direction so
            you spend less time planning and more time exploring. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Amet error laboriosam
            quia rem modi in officia, autem aliquam, consequatur suscipit, saepe
            pariatur quae nostrum maxime quas totam vitae esse reiciendis?
          </p>
        </div>
      </div>

      {/* second part */}
      <div className=" max-container flexCenter w-full relative">
        <Image
          src={"/boat.png"}
          alt="boat"
          className="lg:rounded-3xl w-full object-cover object-center"
          width={1440}
          height={580}
        />

        {/* floating div */}
        <div
          className="absolute flex gap-3 bg-white py-8 pl-5 pr-7 rounded-3xl border
        shadow-lg md:left-[5%] lg:top-20"
        >
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />

          <div className="flexBetween flex-col">
            {/* first col */}
            <div className="flex flex-col w-full">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">45 min</p>
              </div>
              <p className="bold-20 mt-2">Agues Calientes</p>
            </div>

            {/* second col */}
            <div className="flex flex-col w-full">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuran
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;

import Image from "next/image";
import Btn from "./Btn";

function GetApp() {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]" id="pricing">
      <div className="get-app  mx-auto max-w-[1440px] ">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Btn
              type="button"
              text="App Store"
              icon="/apple.svg"
              style="btn_white"
              full
            />
            <Btn
              type="button"
              text="Play Store"
              icon="/android.svg"
              style="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div
          className="flex flex-1 items-center justify-end"
          data-aos="fade-up"
        >
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={870}
            data-aos="zoom-in"
          />
        </div>
      </div>
    </section>
  );
}

export default GetApp;

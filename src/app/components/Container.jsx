import React from "react";
import arrow from "../../../public/svgexport-7.svg";
import Image from "next/image";
const Container = () => {
  return (
    <div className="max-w-[90%] xl:max-w-[1300px] mx-auto w-full lg:flex lg:flex-row items-center justify-between mt-[0rem] relative z-[2]">
      <div className="lg:w-[48%]">
        <div className="ld:max-w-[90%]">
          <p className="text-justify lg:text-left font-[Beatrice-Medium] text-[18px] sm:text-[24px] md:text-[26px] text-[#0B2240] leading-[145%]">
            Imagine a world of streamlined interviews, where you can assess
            candidates efficiently, focus on top talent, and create a positive
            first impression. Our AI platform makes it possible.
          </p>
          <p className="text-justify lg:text-left mt-[1rem] sm:mt-[2rem] font-[Poppins-Regular] font-light text-[#484848] text-[1rem] sm:text-[1.1rem] leading-relaxed">
            Our platform provides objective data-driven insights to identify the
            best fit for your organisation.
          </p>
        </div>
        <div className="hidden lg:flex justify-end md:mt-[1rem] xl:mt-[6rem]">
          <Image src={arrow} />
        </div>
      </div>
      <div className="lg:w-[48%] mt-[3rem] lg:mt-[-4rem]">
        <div className="">
          <div data-vjs-player="true">
            <div>
              <video
                tabindex="-1"
                id="vjs_video_3_html5_api"
                className="vjs-tech"
                loop=""
                muted="muted"
                autoplay="autoplay"
                src="./interview.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;

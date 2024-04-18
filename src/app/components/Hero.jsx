import Image from "next/image";
import spinner from "../../../public/svgexport-5.svg";
import ellipse from "../../../public/svgexport-6.svg";
const Hero = () => {
  return (
    <div className="min-h-[88vh] flex justify-center items-center">
      <div className=" w-max my-0 relative z-[2] max-w-[90%] xl:max-w-[1300px] mx-auto">
        <Image
          className="animate-[spin_5s_linear_infinite] absolute top-[-50px] sm:top-[-120px] xl:top-[-70px] right-[20vw]  sm:right-[12vw] w-[55px] sm:w-[100px] xl:w-[150px]"
          src={spinner}
        />
        <span className="block text-[#0B2240] font-[Beatrice-Light] text-[22px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[73px]">
          Supercharge your
        </span>
        <span className="block text-[#0B2240] font-[Beatrice-Light] pl-[1rem] sm:pl-[3rem] md:pl-[9rem] text-[22px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[73px] leading-[160%] sm:leading-[95%]">
          hiring process with our
        </span>
        <span className="block text-[#0B2240] pt-[5px] font-[Beatrice-Medium] text-[22px] sm:text-[24px] md:text-[36px] lg:text-[48px] xl:text-[73px] leading-[160%]">
          intelligent interview platform
        </span>
        <span className="mt-[1.5rem] sm:mt-0 block font-[Poppins-Regular] font-light text-[#484848] text-[0.8rem] sm:text-[1rem] leading-[160%]">
          Empower candidates and
        </span>
        <span className="block font-[Poppins-Regular] font-light text-[#484848] text-[0.8rem] sm:text-[1rem] leading-[160%]">
          streamline selection
        </span>
        <div className="w-full mt-[0.5rem] ml-[-2rem] sm:ml-0 flex justify-center">
          <a href="/">
            <div className="relative h-auto scale-[0.7] sm:scale-[1]">
              <Image src={ellipse} />
              <span className="absolute text-[#0B2240] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-[Beatrice-Light]">
                Schedule a Demo
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

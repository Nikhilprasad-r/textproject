import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[12vh] max-w-[90%] xl:max-w-[1300px] mx-auto">
      <div className="lg:z-[6] relative mt-6">
        <Link href="/">
          <Image
            src="/ai_interviewer_logo_raw.png"
            alt="Interviewer.ai"
            width={192}
            height={60}
            className="ml-[-0.8rem]"
          />
        </Link>
        <p></p>
      </div>
      <div className="lg:hidden relative z-[6] mt-6" id="burger">
        <Image src="/burger-left.png" width={28} height={28} />
      </div>
      <div className="flex mt-6">
        <div className="ml-auto hidden lg:flex">
          <div className="z-[999]">
            <Link
              className="nav-item relative font-[Beatrice-Light] text-[1rem]"
              href="/"
            >
              Get Started
              <div className="absolute bottom-[-5px] h-[3px] left-0 max-w-full w-0">
                <svg
                  className="svg-line2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="87.867"
                  height="1.337"
                  viewBox="0 0 87.867 1.337"
                >
                  <path
                    id="Path_2207"
                    data-name="Path 2207"
                    d="M-1135.181-364.937s30.319-.838,56.608,0,31.21,0,31.21,0"
                    transform="translate(1135.188 365.605)"
                    fill="none"
                    stroke="#0b2240"
                    stroke-width="0.5"
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
          <div className="ml-0 lg:ml-[2rem] mt-[1.5rem] lg:mt-0 z-[999]">
            <Link
              className="nav-item relative font-[Beatrice-Light] text-[1rem]"
              href="#contact_us"
            >
              Schedule a Demo
              <div className="underline-wrap">
                <svg
                  className="svg-line1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="87.867"
                  height="1.337"
                  viewBox="0 0 87.867 1.337"
                >
                  <path
                    id="Path_2207"
                    data-name="Path 2207"
                    d="M-1135.181-364.937s30.319-.838,56.608,0,31.21,0,31.21,0"
                    transform="translate(1135.188 365.605)"
                    fill="none"
                    stroke="#0b2240"
                    stroke-width="0.5"
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

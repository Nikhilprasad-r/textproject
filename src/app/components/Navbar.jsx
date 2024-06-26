"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center h-[12vh] max-w-[90%] xl:max-w-[1300px] mx-auto">
        <div className="lg:z-[6]  mt-6">
          <Link href="/">
            <Image
              src="/ai_interviewer_logo_raw.png"
              alt="Interviewer.ai"
              width={192}
              height={60}
              className="w-48 ml-[-.8rem]"
            />
          </Link>
        </div>

        <div
          className="lg:hidden z-[6] mt-6"
          onClick={() => setMobile(!mobile)}
        >
          <Image
            src="/burgermenu.svg"
            width={28}
            height={28}
            className={clsx("cursor-pointer", mobile ? "hidden" : "block")}
          />
          <IoClose
            width={28}
            height={28}
            className={clsx(
              "cursor-pointer text-3xl",
              mobile ? "block" : "hidden"
            )}
          />
        </div>

        <div className="hidden lg:flex  mt-6">
          <div className="ml-auto flex ">
            <div className="z-[999]">
              <Link
                className="nav-item relative group font-[Beatrice-Light] text-[1rem]"
                href="/"
              >
                Get Started
                <div className="absolute group-hover:block hidden bottom-[-5px] h-[3px] left-0 max-w-full w-0">
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
                className="nav-item relative group font-[Beatrice-Light] text-[1rem]"
                href="/"
              >
                Schedule a Demo
                <div className="underline-wrap group-hover:block hidden">
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
      <div
        className={clsx(
          "h-[88vh] z-[5] w-full bg-[#fff6ed] overflow-hidden ",
          mobile ? "block" : "hidden"
        )}
      >
        <div className="h-full flex flex-col gap-5">
          <Link
            className="nav-item relative group font-[Beatrice-Light] pl-5 text-[1rem]"
            href="/"
          >
            Get Started
            <div className="absolute group-hover:block hidden bottom-[-5px] h-[3px] left-0 max-w-full w-0">
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
          <Link
            className="nav-item relative group font-[Beatrice-Light] pl-5 text-[1rem]"
            href="/"
          >
            Schedule a Demo
            <div className="underline-wrap group-hover:block hidden">
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
  );
};

export default Navbar;

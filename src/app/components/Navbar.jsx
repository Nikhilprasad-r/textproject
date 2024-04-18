import Image from "next/image";
const Navbar = () => {
  return (
    <div class="hero__menu max-w-[90%] xl:max-w-[1300px] mx-auto">
      <div class="hero__logo lg:z-[6] relative mt-6">
        <a href="/">
          <Image
            src="/ai_interviewer_logo_raw.png"
            alt="Interviewer.ai"
            width={192}
            height={60}
            class="ml-[-0.8rem]"
          />
        </a>
        <p></p>
      </div>
      <div class="hero__burger" id="burger">
        <span></span>
      </div>
      <div class="hero__right">
        <div class="hero__nav">
          <div class="z-[999]">
            <a
              class="nav-item relative font-[Beatrice-Light] text-[1rem]"
              href="/register"
            >
              Get Started
              <div class="underline-wrap">
                <svg
                  class="svg-line2"
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
            </a>
          </div>
          <div class="ml-0 lg:ml-[2rem] mt-[1.5rem] lg:mt-0 z-[999]">
            <a
              class="nav-item relative font-[Beatrice-Light] text-[1rem]"
              href="#contact_us"
            >
              Schedule a Demo
              <div class="underline-wrap">
                <svg
                  class="svg-line1"
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

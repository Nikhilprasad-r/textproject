import Image from "next/image";
const Spacer = () => {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <Image
        src="/svgexport-1.svg"
        class="absolute overflow-hidden z-[1] top-[-12rem] md:top-[-6rem] right-[-18rem]
        lg:opacity-100 hero-svg-effect1 hero-svg-effect1-container"
        width={822}
        height={822}
      />
      <Image
        src="/svgexport-2.svg"
        class="absolute z-[1] w-[500px] h-[500px] md:w-auto md:h-auto top-[15rem] md:top-[-1rem] left-[-5rem] md:left-[-16rem] hero-svg-effect2 hero-svg-effect2-container"
        width={1066}
        height={1066}
      />
    </div>
  );
};

export default Spacer;

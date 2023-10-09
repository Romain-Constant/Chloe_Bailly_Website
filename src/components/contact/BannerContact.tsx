import Link from "next/link";
import RdvButton from "../RdvButton";

const BannerContact = () => {
  return (
    <header className="w-full px-[50px] md:px-[70px] lg:px-[100px]">
      <div
        className={`h-[400px] md:h-[400px] xl:h-[500px]  bg-[url('/laptop-banner.jpeg')] bg-cover sm:bg-center  flex items-center justify-center mb-28 sm:mb-36  lg:mb-44`}
      >
        <div className="w-4/5 sm:w-3/5 h-3/5 bg-white opacity-90 p-2">
          <div className="w-full h-full border border-marron flex flex-col justify-center items-center gap-5">
            <h1 className="uppercase font-prata text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-[6px] text-center">
              Contact
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BannerContact;

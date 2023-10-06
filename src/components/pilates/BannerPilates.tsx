import RdvButton from "@/components/RdvButton";
import Link from "next/link";

const BannerPilates = () => {
  return (
    <header className="w-full px-[50px] md:px-[70px] lg:px-[100px]">
      <div
        className={`h-[400px] md:h-[400px] xl:h-[500px]  bg-[url('/banner_pilates.jpg')] bg-cover bg-center flex items-center justify-center mb-28 sm:mb-36  lg:mb-44`}
      >
        <div className="w-4/5 sm:w-3/5 h-3/5 bg-white opacity-90 p-2">
          <div className="w-full h-full border border-marron flex flex-col justify-center items-center gap-5">
            <h1 className="uppercase font-prata text-xl sm:text-2xl lg:text-3xl xl:text-4xl max-[390px]:text-sm  max-[461px]:tracking-[2px]  min-[462px]:tracking-[6px] text-center">
              Coach Pilates
            </h1>
            <div className="block sm:hidden">
              <Link href="/contact" target="_blank">
                <RdvButton buttonText="Contactez moi" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BannerPilates;

import RdvButton from "../RdvButton";
import Link from "next/link";

const BannerTarifs = () => {
  return (
    <div className="w-full sm:px-[50px] md:px-[70px] lg:px-[100px] mb-28 sm:mb-36 lg:mb-44">
      <div
        className={`h-[400px] md:h-[400px] xl:h-[500px]  bg-[url('/zen-banner.jpg')] bg-cover flex items-center justify-center`}
      >
        <div className="w-4/5 sm:w-3/5 h-3/5 bg-white opacity-90 p-2">
          <div className="w-full h-full border border-marron flex flex-col justify-center items-center gap-5">
            <h1 className="uppercase font-prata text-2xl lg:text-3xl xl:text-4xl max-[390px]:tracking-[1px] max-[461px]:tracking-[2px]  min-[462px]:tracking-[6px] text-center">
              Tarifs
            </h1>
            <div className="block sm:hidden">
              <Link
                href="https://www.doctolib.fr/dieteticien/la-madeleine/chloe-bailly"
                target="_blank"
              >
                <RdvButton buttonText="Prendre RDV" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTarifs;

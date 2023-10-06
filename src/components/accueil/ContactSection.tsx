import Image from "next/image";
import RdvButton from "../RdvButton";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="w-full h-auto px-[50px] sm:px-[70px] lg:px-[100px] flex flex-col items-center mb-14 sm:mb-36 lg:mb-44">
      <div className="w-10/12 lg:w-6/12 flex flex-col items-center">
        <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] relative">
          <Image
            src="/contact_icon2.png"
            sizes="70px"
            fill
            style={{ objectFit: "contain" }}
            alt="Email icon"
          />
        </div>

        <div className="w-6/12 h-[2px] bg-marron my-10 lg:my-14"></div>
        <h1 className="uppercase font-prata text-lg sm:text-xl lg:text-3xl xl:text-4xl tracking-[6px] text-center  leading-normal xl:leading-normal mb-4 sm:mb-20">
          Contact
        </h1>
      </div>
      <div className="w-full  px-10 flex flex-col sm:flex-row gap-10 sm:gap-0">
        <div className="w-full flex flex-col items-center justify-between">
          <p className="text-green font-extralight text-center  text-sm sm:text-base lg:text-lg xl:text-xl">
            Besoin d’un renseignement ?
          </p>
          <Link href="/contact" target="_blank">
            <RdvButton buttonText="Contactez moi" />
          </Link>
        </div>
        <div className="w-full  flex flex-col items-center justify-between ">
          <p className="text-green font-extralight text-center  text-sm sm:text-base lg:text-lg xl:text-xl">
            Vous souhaitez prendre rendez-vous ?
          </p>
          <Link
            href="https://www.doctolib.fr/dieteticien/la-madeleine/chloe-bailly"
            target="_blank"
          >
            <RdvButton buttonText="Doctolib" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

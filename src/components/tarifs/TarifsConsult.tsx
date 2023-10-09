"use client";
import { Variants, motion } from "framer-motion";
import RdvButton from "../RdvButton";
import Image from "next/image";
import Link from "next/link";

const introHeaderVariants: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const sectionVariants: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 1,
    },
  },
};

const TarifsConsult = () => {
  return (
    <section className="w-full h-auto px-[50px] sm:px-[134px] lg:px-[164px] gap-10 sm:gap-20 xl:gap-28 flex flex-col  items-center justify-between mb-20 sm:mb-36  lg:mb-44 ">
      <motion.div
        className="w-full border border-marron flex flex-col items-center p-4 md:p-12"
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={introHeaderVariants}
      >
        <h1 className="w-full uppercase font-prata text-lg sm:text-xl lg:text-3xl xl:text-4xl tracking-[6px] text-center text-marron leading-normal xl:leading-normal mb-10 sm:mb-20">
          Consultations à domicile
        </h1>
        <div className="w-full flex items-center mb-10">
          <div>
            <h2 className="uppercase text-left font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px]">
              Le bilan diététique personnalisé
            </h2>
            <p className="text-green font-extralight text-left text-sm sm:text-base lg:text-lg xl:text-xl">
              En visio - 1h
            </p>
          </div>

          <div className="w-full border-b-2 border-dotted border-black mr-4 md:mr-10"></div>
          <h2 className="uppercase font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px] ">
            50€
          </h2>
        </div>
        <div className="w-full flex items-center mb-10">
          <div>
            <h2 className="uppercase text-left font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px]">
              Le bilan diététique personnalisé
            </h2>
            <p className="text-green font-extralight text-left text-sm sm:text-base lg:text-lg xl:text-xl">
              A domicile - 1h
            </p>
          </div>

          <div className="w-full border-b-2 border-dotted border-black mr-4 md:mr-10"></div>
          <h2 className="uppercase font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px] ">
            60€
          </h2>
        </div>

        <p className="text-green font-extralight text-center  text-sm sm:text-base lg:text-lg xl:text-xl">
          La première consultation a pour but de connaitre vos motivations, vos
          habitudes alimentaires et d’établir votre bilan diététique en fonction
          de vos besoins.
        </p>
        <div className="w-2/5 h-[2px] bg-marron my-20 sm:my-32"></div>
        <div className="w-full flex items-center mb-10">
          <div>
            <h2 className="uppercase text-left font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px]">
              Les consultations de suivi
            </h2>
            <p className="text-green font-extralight text-left text-sm sm:text-base lg:text-lg xl:text-xl">
              En visio - 30min
            </p>
          </div>

          <div className="w-full border-b-2 border-dotted border-black mr-4 md:mr-10 ml-4"></div>
          <h2 className="uppercase font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px] ">
            40€
          </h2>
        </div>
        <div className="w-full flex items-center mb-10">
          <div>
            <h2 className="uppercase text-left font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px]">
              Les consultations de suivi
            </h2>
            <p className="text-green font-extralight text-left text-sm sm:text-base lg:text-lg xl:text-xl">
              A domicile - 30min
            </p>
          </div>

          <div className="w-full border-b-2 border-dotted border-black mr-4 md:mr-10 ml-4"></div>
          <h2 className="uppercase font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px] ">
            45€
          </h2>
        </div>
        <p className="text-green font-extralight text-center  text-sm sm:text-base lg:text-lg xl:text-xl mb-10">
          La première consultation de suivi a lieu une semaine après le bilan
          diététique personnalisé. Les consultations suivantes sont espacées de
          2 semaines, afin de suivre au mieux votre évolution. Ces délais sont
          modulables en fonction des besoins du (de la) patient(e).
        </p>
        <Link
          href="https://www.doctolib.fr/dieteticien/la-madeleine/chloe-bailly"
          target="_blank"
        >
          <RdvButton buttonText="Prendre RDV" />
        </Link>
      </motion.div>
      <motion.div
        className="w-full border border-marron flex flex-col items-center p-4 md:p-12"
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={sectionVariants}
      >
        <h1 className="w-full uppercase font-prata text-lg sm:text-xl lg:text-3xl xl:text-4xl tracking-[6px] text-center text-marron leading-normal xl:leading-normal mb-10 sm:mb-20">
          Coach Pilates
        </h1>
        <h2 className="w-full uppercase text-left font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px]  ">
          Coaching à domicile individuel ou petits groupes (45min)
        </h2>
        <p className="w-full text-green font-extralight text-left text-sm sm:text-base lg:text-lg xl:text-xl mb-16">
          Sur la métropole lilloise / Tarif à l’unité et par personne
        </p>
        <div className="w-full flex items-center mb-10">
          <h2 className=" text-left font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px]">
            Une personne
          </h2>
          <div className="w-full border-b-2 border-dotted border-black mr-4 ml-4  md:mr-10"></div>
          <h2 className="uppercase font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px] ">
            40€
          </h2>
        </div>
        <div className="w-full flex items-center mb-10">
          <h2 className=" text-left font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl  tracking-[4px]">
            Deux personnes
          </h2>
          <div className="w-full border-b-2 border-dotted border-black mr-4 ml-4  md:mr-10"></div>
          <h2 className=" font-prata text-base max-[421px]:text-sm md:text-lg lg:text-xl tracking-[4px] ">
            25€
          </h2>
        </div>
        <div className="w-full flex items-center mb-10">
          <h2 className=" text-left font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl  tracking-[4px]">
            Trois personnes
          </h2>
          <div className="w-full border-b-2 border-dotted border-black mr-4 ml-4  md:mr-10"></div>
          <h2 className=" font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px] ">
            15€
          </h2>
        </div>
        <div className="w-full flex items-center ">
          <h2 className=" text-left font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px]">
            Quatre personnes ou plus
          </h2>
          <div className="w-full border-b-2 border-dotted border-black mr-4 ml-4  md:mr-10"></div>
          <h2 className="uppercase font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px] ">
            12€
          </h2>
        </div>
        <div className="w-[70px] h-[80px] lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px] relative my-10">
          <Image
            src="/pilates_icon.png"
            sizes="90px"
            fill
            style={{ objectFit: "contain" }}
            alt="Pilates icon"
          />
        </div>
        <div className="w-full flex items-center mb-10">
          <div>
            <h2 className="uppercase text-left font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px]">
              Coaching en entreprise
            </h2>
            <p className="text-green font-extralight text-left text-sm sm:text-base lg:text-lg xl:text-xl">
              Sur la métropole lilloise
            </p>
          </div>

          <div className="w-full border-b-2 border-dotted border-black mr-4 md:mr-10 ml-4"></div>
          <h2 className="uppercase text-right font-prata max-[421px]:text-sm text-base md:text-lg lg:text-xl tracking-[4px] ">
            Sur devis
          </h2>
        </div>
        <Link href="/contact" target="_blank">
          <RdvButton buttonText="Contactez-moi" />
        </Link>
      </motion.div>
    </section>
  );
};

export default TarifsConsult;

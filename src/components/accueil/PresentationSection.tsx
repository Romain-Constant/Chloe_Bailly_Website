"use client";
import { Variants, motion } from "framer-motion";
import RdvButton from "../RdvButton";
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

const PresentationSection = () => {
  return (
    <motion.section
      className="w-full h-auto px-[50px] sm:px-[134px] lg:px-[164px] gap-10 sm:gap-20 xl:gap-28 flex flex-col sm:flex-row items-center justify-between mb-20 sm:mb-36  lg:mb-44"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={introHeaderVariants}
    >
      <div className="w-[220px] h-[220px] sm:w-[500px] sm:h-[500px] flex items-center justify-center">
        <img
          src="/cloclo_taille.png"
          alt=""
          className="w-full h-auto shadow-basic"
        />
      </div>

      <div className="w-10/12 sm:w-3/5 h-auto py-6 flex flex-col justify-between">
        <h1 className="uppercase font-prata text-lg sm:text-xl lg:text-3xl xl:text-4xl tracking-[6px] text-center sm:text-left leading-normal xl:leading-normal mb-4">
          ALIMENTATION SAINE ET BIEN-ÊTRE
        </h1>
        <p className="text-green font-extralight text-center sm:text-left text-sm sm:text-base lg:text-lg xl:text-xl">
          Chloé, diététicienne nutritionniste diplômée, passionnée par son
          métier.
        </p>
        <p className="text-green font-extralight text-center sm:text-left text-sm sm:text-base lg:text-lg xl:text-xl">
          Une alimentation saine et équilibrée joue un rôle essentiel sur le
          capital santé et la gestion du poids. Elle aide à prévenir divers
          troubles ou problèmes de santé. Elle améliore également les
          performances physiques et intellectuelles, la vitalité, l'aspect de la
          peau… Et le bien-être moral, lui-même activateur d’une bonne santé.
        </p>
        <p className="text-green font-extralight text-center sm:text-left text-sm sm:text-base lg:text-lg xl:text-xl">
          Se sentir bien dans son corps, c’est aussi se sentir bien dans la
          tête.
        </p>
        <Link
          href="https://www.doctolib.fr/dieteticien/la-madeleine/chloe-bailly"
          target="_blank"
          className="flex justify-center sm:justify-start"
        >
          <RdvButton buttonText="Prendre RDV" />
        </Link>
      </div>
    </motion.section>
  );
};

export default PresentationSection;

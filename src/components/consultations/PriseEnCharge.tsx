"use client";
import Link from "next/link";
import RdvButton from "../RdvButton";
import { Variants, motion } from "framer-motion";

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

const PriseEnCharge = () => {
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
          src="/consultations_photo.jpg"
          alt="Photo d'un carnet de notes"
          className="w-full h-auto shadow-basic"
        />
      </div>

      <div className="w-full sm:w-3/5 h-auto py-6 flex flex-col justify-between">
        <h1 className="uppercase font-prata text-xl lg:text-3xl xl:text-4xl tracking-[4px] lg:tracking-[6px] text-center sm:text-left leading-normal xl:leading-normal mb-4">
          Une prise en charge personnalisée
        </h1>
        <p className="text-green font-light text-center sm:text-left text-base lg:text-lg xl:text-xl">
          Que diriez-vous de pouvoir rencontrer votre nutritionniste dans le
          confort de votre maison?
        </p>
        <p className="text-green font-light text-center sm:text-left text-base lg:text-lg xl:text-xl">
          C’est ce que je vous propose, ce service remporte beaucoup de succès.
          Les rencontres à domicile sont très efficaces, car elles me permettent
          de rencontrer les gens dans leur cuisine, leur chez-soi. Je peux alors
          analyser le garde-manger et le frigo et comparer les étiquettes des
          produits avec vous.
          <br /> Ensuite, je vous proposerai des alternatives adaptées à vos
          besoins. Je pourrai également avoir un aperçu des appareils
          disponibles, ce qui nous permettra de trouver des recettes faciles à
          préparer.
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

export default PriseEnCharge;

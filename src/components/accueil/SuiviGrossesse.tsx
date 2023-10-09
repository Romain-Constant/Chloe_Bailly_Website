"use client";
import RdvButton from "../RdvButton";
import Link from "next/link";
import { Variants, motion } from "framer-motion";

const sectionVariants: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 1.7,
    },
  },
};

const SuiviGrossesse = () => {
  const divStyle = {
    width: "100%", // Définit la largeur à 100% du conteneur
    aspectRatio: "1 / 1", // Utilisez la propriété aspectRatio pour que la largeur soit égale à la hauteur
    background: 'url("/cloclo_enceinte.jpg")', // Ajoutez l'image de fond ici
    backgroundSize: "cover", // Assurez-vous que l'image de fond couvre la div
  };

  return (
    <motion.section
      className="w-full h-auto px-[50px] sm:px-[134px] lg:px-[164px] gap-10 sm:gap-20 xl:gap-28 flex flex-col sm:flex-row items-center justify-between mb-20 sm:mb-36  lg:mb-44"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={sectionVariants}
    >
      <div className="w-10/12 sm:w-3/5 h-auto py-6 flex flex-col justify-between">
        <h1 className="uppercase font-prata text-lg sm:text-xl lg:text-3xl xl:text-4xl tracking-[6px] text-center sm:text-left leading-snug sm:leading-normal mb-4">
          Suivi grossesse et post-accouchement
        </h1>
        <p className="text-green font-extralight text-center sm:text-left text-sm sm:text-base lg:text-lg xl:text-xl">
          Étant donné l’énorme quantité d’informations disponibles traitant les
          questions de nutrition pendant et après la grossesse, il peut parfois
          être difficile pour la femme de faire le tri parmi celles-ci.
        </p>
        <p className="text-green font-extralight text-center sm:text-left text-sm sm:text-base lg:text-lg xl:text-xl">
          Face à cette situation, je donnerai aux futures mamans des conseils de
          valeurs , en vous aidant à rester en bonne santé, assurer le bon
          développement de votre bébé, et perdre les kilos superflus après la
          grossesse.
        </p>
        <p className="text-green font-extralight text-center sm:text-left text-sm sm:text-base lg:text-lg xl:text-xl">
          Un bon suivi de grossesse, c'est plein de promesses : rester en forme,
          maitriser sa prise de poids, assurer une bonne santé pour vous et le
          bébé, se sentir belle, et se détendre!
        </p>
        <Link
          href="https://www.doctolib.fr/dieteticien/la-madeleine/chloe-bailly"
          target="_blank"
          className="flex justify-center sm:justify-start"
        >
          <RdvButton buttonText="Prendre RDV" />
        </Link>
      </div>
      <div className="w-[220px] h-[220px] sm:w-[500px] sm:h-[500px] flex items-center justify-center">
        <img
          src="/cloclo_enceinte.png"
          alt="Femme enceinte"
          className="w-full h-auto shadow-basic"
        />
      </div>
    </motion.section>
  );
};

export default SuiviGrossesse;

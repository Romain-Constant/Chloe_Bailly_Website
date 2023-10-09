"use client";
import Link from "next/link";
import RdvButton from "@/components/RdvButton";
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

const PilatesXp = () => {
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
      variants={introHeaderVariants}
    >
      <div className="w-10/12 sm:w-3/5 h-auto py-6 flex flex-col justify-between">
        <h1 className="uppercase font-prata text-lg sm:text-xl lg:text-3xl xl:text-4xl tracking-[6px] text-center sm:text-left leading-snug sm:leading-normal mb-4">
          10 ans d'expérience
        </h1>
        <p className="text-green font-extralight text-center sm:text-left text-sm sm:text-base lg:text-lg xl:text-xl">
          Je suis une vraie passionnée de sport, mes parents étant tous les deux
          professeurs d'EPS. L'aventure pour le Pilates a commencé il y a 10
          ans, suite à des douleurs cervicales, où j'ai découvert une réelle
          passion. J'ai souhaité allier la diététique au Pilates, car c'est un
          équilibre parfait pour perdre du poids, raffermir votre corps et avoir
          un ventre plat.
        </p>
        <p className="text-green font-extralight text-center sm:text-left text-sm sm:text-base lg:text-lg xl:text-xl">
          Le Pilates est idéal pour: <br />
          - Avoir un ventre plat
          <br />
          - Renforcer la sangle abdominale en pronfondeur <br />
          - Améliorer l’équilibre et la coordination <br />
          - Ne plus avoir mal au dos <br />- Prévenir les blessures Affiner la
          silhouette
        </p>

        <Link
          href="/contact"
          target="_blank"
          className="flex justify-center sm:justify-start"
        >
          <RdvButton buttonText="Prendre RDV" />
        </Link>
      </div>
      <div className="w-[220px] h-[220px] sm:w-[500px] sm:h-[500px] flex items-center justify-center">
        <img
          src="/cloclo_pilates.jpg"
          alt="Femme enceinte"
          className="w-full h-auto shadow-basic"
        />
      </div>
    </motion.section>
  );
};

export default PilatesXp;

"use client";
import { Variants, motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
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

const ResultatsSection = () => {
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
          src="/cloclo_bureau.jpg"
          alt="Chloé Bailly picture"
          className=" h-auto shadow-basic"
        />
      </div>

      <div className="w-10/12 sm:w-3/5 h-full py-6 flex flex-col justify-between">
        <h1 className="uppercase font-prata text-lg sm:text-xl lg:text-3xl xl:text-4xl tracking-[6px] text-center sm:text-left leading-normal xl:leading-normal mb-4">
          Méthode efficace, résultats garantis !
        </h1>
        <p className="text-green font-extralight text-center sm:text-left text-sm sm:text-base lg:text-lg xl:text-xl ">
          Contactez-moi à l'aide du formulaire ou en utilisant les coordonnées
          ci-dessous. Je vous réponds dans les plus brefs délais . Si vous
          souhaitez un rendez-vous, laissez-moi vos préférences horaires.
        </p>
        <div className="font-prata text-2xl lg:text-3xl text-marron max-[840px]:flex-col flex items-center gap-2 lg:gap-5 my-10">
          <FaEnvelope />
          <Link href="mailto:chloebailly.dieteticienne@outlook.fr">
            <h3 className="text-lg lg:text-xl  hover:text-green">
              chloebailly.dieteticienne@outlook.fr
            </h3>
          </Link>
        </div>
        <div className="font-prata text-2xl lg:text-3xl text-marron max-[840px]:flex-col flex items-center gap-2 lg:gap-5">
          <FaPhone />
          <Link href="tel:0687484063">
            <h3 className="text-lg lg:text-xl mt-1 hover:text-green">
              06.87.48.40.63
            </h3>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ResultatsSection;

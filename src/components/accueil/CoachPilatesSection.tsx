"use client";
import { Variants, motion } from "framer-motion";
import Image from "next/image";

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

const CoachPilatesSection = () => {
  return (
    <motion.section
      className="w-full h-auto px-[50px] sm:px-[70px] lg:px-[100px] flex flex-col items-center  sm:mb-36 lg:mb-44"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={sectionVariants}
    >
      <div className="w-10/12 lg:w-6/12 flex flex-col items-center">
        <div className="w-[70px] h-[80px] lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px] relative">
          <Image
            src="/pilates_icon.png"
            sizes="90px"
            fill
            style={{ objectFit: "contain" }}
            alt="Pilates icon"
          />
        </div>

        <div className="w-6/12 h-[2px] bg-marron my-10 lg:my-14"></div>
        <h1 className="uppercase font-prata text-lg sm:text-xl lg:text-3xl xl:text-4xl tracking-[6px] text-center  leading-normal xl:leading-normal mb-4 lg:mb-10">
          Coach Pilates
        </h1>
        <p className="text-green font-extralight text-center  text-sm sm:text-base lg:text-lg xl:text-xl">
          Débutant ou intermédiaire, femmes enceintes ou en post-accouchement,
          je vous propose, en plus des consultations, des cours de Pilates pour
          affiner votre silhouette et avoir un ventre plat :
        </p>
        <br />
        <p className="text-green font-extralight text-center  text-sm sm:text-base lg:text-lg xl:text-xl">
          - Des cours en coaching individuel et en petits groupes à domicile{" "}
          <br />- Des cours en entreprise
        </p>
      </div>

      <div className="w-full h-[300px] sg:h-[500px] xl:h-[750px] sm:mt-10 lg:mt-14 relative">
        <Image
          src="/pilates_plage.png"
          sizes="1655px"
          fill
          alt="Pilates on the beach picture"
          style={{ objectFit: "contain" }}
        />
      </div>
    </motion.section>
  );
};

export default CoachPilatesSection;

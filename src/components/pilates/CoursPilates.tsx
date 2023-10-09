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

const CoursPilates = () => {
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
          Le coaching se fera à domicile ou en entreprise (sur la métropole
          lilloise) , pour que vous vous sentiez bien, que vous n'ayez pas de
          contraintes pour vous déplacer et perdre du temps.
        </p>
        <br />
        <p className="text-green font-extralight text-center  text-sm sm:text-base lg:text-lg xl:text-xl">
          Le coaching à domicile peut se faire soit en individuel, soit en petit
          groupe (à partir de deux personnes et jusqu'à 8 personnes).
        </p>
        <br />
        <p className="text-green font-extralight text-center  text-sm sm:text-base lg:text-lg xl:text-xl">
          En entreprise, un minimum de 4 personnes sera demandé.
        </p>
      </div>

      <div className="w-full h-[200px] lg:h-[250px] xl:h-[300px] mb-10 sm:mb-0 mt-10 lg:mt-14 relative">
        <Image
          src="/pilates_beach.jpg"
          sizes="1655px"
          fill
          alt="Pilates on the beach picture"
          style={{ objectFit: "cover" }}
        />
      </div>
    </motion.section>
  );
};

export default CoursPilates;

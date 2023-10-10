"use client";
import Image from "next/image";
import InfosCarousel from "../InfosCarousel";
import { Variants, motion } from "framer-motion";

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

const PourquoiConsulter = () => {
  return (
    <motion.section
      className="w-full h-auto px-[50px] sm:px-[70px] lg:px-[100px] flex flex-col items-center mb-20 sm:mb-36 lg:mb-44"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={sectionVariants}
    >
      <div className="w-10/12 lg:w-6/12 flex flex-col items-center">
        <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] relative">
          <Image
            src="/online-food-order.svg"
            sizes="70px"
            fill
            style={{ objectFit: "cover" }}
            alt="icone de salade"
          />
        </div>

        <div className="w-6/12 h-[2px] bg-marron my-10 lg:my-14"></div>
        <h1 className="uppercase font-prata text-lg sm:text-xl lg:text-3xl xl:text-4xl tracking-[6px] text-center  leading-normal xl:leading-normal mb-10 ">
          Pourquoi me consulter ?
        </h1>
      </div>
      <InfosCarousel />
    </motion.section>
  );
};

export default PourquoiConsulter;

"use client";
import Image from "next/image";
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
const MethodSection = () => {
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
            src="/salad_icon.png"
            sizes="70px"
            fill
            style={{ objectFit: "cover" }}
            alt="Icone de salade"
          />
        </div>

        <div className="w-6/12 h-[2px] bg-marron my-10 lg:my-14"></div>
        <h1 className="uppercase font-prata text-lg sm:text-xl lg:text-3xl xl:text-4xl tracking-[6px] text-center sm:text-left leading-normal xl:leading-normal mb-4 lg:mb-10">
          Méthode
        </h1>
        <p className="text-green font-extralight text-center  text-sm sm:text-base lg:text-lg xl:text-xl">
          Une alimentation saine et équilibrée joue un rôle essentiel sur le
          capital santé et la gestion du poids. Elle aide à prévenir divers
          troubles ou problèmes de santé. Elle améliore également les
          performances physiques et intellectuelles, la vitalité, l&apos;aspect
          de la peau… Et le bien-être moral, lui-même activateur d’une bonne
          santé.
        </p>
        <br />
        <p className="text-green font-extralight text-center  text-sm sm:text-base lg:text-lg xl:text-xl">
          Parce que chaque personne est différente, je propose un programme
          adapté à chacun, en fonction de ses besoins nutritionnels, de son
          rythme de vie et de ses goûts. Mon but est de vous apprendre à manger
          de tout un peu en évitant toute frustration et surtout prendre plaisir
          à manger.
        </p>
      </div>
      <div className="w-full h-[145px] sm:h-[200px] lg:h-[250px] xl:h-[300px] mt-14 relative">
        <Image
          src="/oleagineux.jpeg"
          sizes="1280px"
          fill
          alt="Oleagineux"
          style={{ objectFit: "cover" }}
        />
      </div>
    </motion.section>
  );
};

export default MethodSection;

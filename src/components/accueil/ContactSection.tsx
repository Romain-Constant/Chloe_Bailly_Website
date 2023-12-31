"use client";
import Image from "next/image";
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
      duration: 1,
      delay: 0.3,
    },
  },
};

const ContactSection = () => {
  return (
    <motion.section
      className="w-full h-auto px-[50px] sm:px-[70px] lg:px-[100px] flex flex-col items-center mb-14 sm:mb-36 lg:mb-44"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={sectionVariants}
    >
      <div className="w-10/12 lg:w-6/12 flex flex-col items-center">
        <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] relative">
          <Image
            src="/contact_icon2.png"
            sizes="70px"
            fill
            style={{ objectFit: "contain" }}
            alt="Email icon"
          />
        </div>

        <div className="w-6/12 h-[2px] bg-marron my-10 lg:my-14"></div>
        <h1 className="uppercase font-prata text-xl lg:text-3xl xl:text-4xl tracking-[4px] lg:tracking-[6px] text-center sm:text-left leading-normal xl:leading-normal mb-10 lg:mb-20">
          Contact
        </h1>
      </div>
      <div className="w-full  px-10 flex flex-col sm:flex-row gap-10 sm:gap-0">
        <div className="w-full flex flex-col items-center justify-between">
          <p className="text-green font-light text-center  text-base lg:text-lg xl:text-xl">
            Besoin d’un renseignement ?
          </p>
          <Link href="/contact">
            <RdvButton buttonText="Contactez-moi" />
          </Link>
        </div>
        <div className="w-full  flex flex-col items-center justify-between ">
          <p className="text-green font-light text-center  text-base lg:text-lg xl:text-xl">
            Vous souhaitez prendre rendez-vous ?
          </p>
          <Link
            href="https://www.doctolib.fr/dieteticien/la-madeleine/chloe-bailly"
            target="_blank"
          >
            <RdvButton buttonText="Doctolib" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;

import LinkButton from "./LinkButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full max-[371px]:h-28 h-24 lg:h-32 xl:h-36 bg-marron flex flex-col items-center ">
      <div className="flex items-center gap-2 lg:gap-4 mt-6  lg:mt-8 xl:mt-10">
        <Link
          href="https://www.instagram.com/chloe.happydiet/?hl=fr"
          target="_blank"
        >
          <LinkButton
            iconLink="/instagram_icon.png"
            altDetail="Icone Instagram"
          />
        </Link>
        <Link
          href="https://www.facebook.com/p/Chloe-Bailly-100063482890814/"
          target="_blank"
        >
          <LinkButton
            iconLink="/facebook_icon.png"
            altDetail="Icone Facebook"
          />
        </Link>
        <Link
          href="mailto:chloebailly.dieteticienne@outlook.fr"
          target="_blank"
        >
          <LinkButton iconLink="/email_icon.png" altDetail="Icone Email" />
        </Link>
        <Link
          href="https://www.doctolib.fr/dieteticien/la-madeleine/chloe-bailly"
          target="_blank"
        >
          <LinkButton
            iconLink="/doctolib-icon.png"
            altDetail="Icone Doctolib"
          />
        </Link>
      </div>
      <p className="text-white font-light text-center text-xs sm:text-sm lg:text-base flex-end mt-3 sm:mt-3 lg:mt-4 xl:mt-6">
        © Copyright 2023 - Création:{" "}
        <Link
          href="https://romainconstant.fr/"
          target="_blank"
          className="hover:text-green hover:duration-100 hover:ease-in"
        >
          Romain Constant
        </Link>{" "}
        -{" "}
        <Link
          href="/mentions-legales"
          className="hover:text-green hover:duration-100 hover:ease-in"
        >
          Mentions légales
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

"use client";
import { useEffect, useState } from "react";
import useScrollListener from "@/hooks/useScrollListener";
import Image from "next/image";
import NavDesktopMenu from "./NavDesktopMenu";
import Link from "next/link";

const Navbar = () => {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 300 && scroll.y - scroll.lastY > 0) {
      _classList.push(" translate-y-[-100%] "); // Ajoutez la classe Tailwind CSS pour cacher la barre de navigation avec transition
    }

    // Ajoutez la classe de box-shadow uniquement lorsque vous n'êtes pas tout en haut de la page
    if (scroll.y > 0) {
      _classList.push("shadow-navbar");
    }
    //@ts-ignore
    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  // Ajoutez une autre utilisation de useEffect pour gérer le cas où vous êtes trop bas dans la page
  useEffect(() => {
    if (scroll.y === 0) {
      //@ts-ignore
      setNavClassList([""]); // Réinitialisez les styles lorsque vous êtes en haut de la page
    }
  }, [scroll.y]);
  return (
    <nav
      className={`bg-white w-full px-[50px] md:px-[70px] lg:px-[100px] hidden z-[999] sticky top-0 lg:flex items-center justify-between h-36 transform transition-transform duration-500 ${navClassList.join(
        " "
      )}`}
    >
      <Link href="/">
        <div className="flex items-center gap-6">
          <Image
            src="/cloclo_logo.png"
            width={80}
            height={80}
            alt="logo de Chloé"
          />
          <h1 className="uppercase text-xl xl:text-2xl font-light text-marron tracking-[4px]">
            Chloé Bailly
          </h1>
        </div>
      </Link>

      <NavDesktopMenu />
    </nav>
  );
};

export default Navbar;

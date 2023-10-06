"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavDesktopMenu.module.css";

const NavDesktopMenu = () => {
  const currentRoute = usePathname();

  return (
    <div className={styles.navMenuContainer}>
      <Link
        href="/"
        className={
          currentRoute === "/" ? styles.activeLink : styles.nonActiveLink
        }
      >
        Accueil
        <div className={styles.underline} />
      </Link>
      <Link
        href="/consultations"
        className={
          currentRoute === "/consultations"
            ? styles.activeLink
            : styles.nonActiveLink
        }
      >
        Consultations
        <div className={styles.underline} />
      </Link>
      <Link
        href="/pilates"
        className={
          currentRoute === "/pilates" ? styles.activeLink : styles.nonActiveLink
        }
      >
        Pilates
        <div className={styles.underline} />
      </Link>
      <Link
        href="/tarifs"
        className={
          currentRoute === "/tarifs" ? styles.activeLink : styles.nonActiveLink
        }
      >
        Tarifs
        <div className={styles.underline} />
      </Link>
      <Link
        href="/contact"
        className={
          currentRoute === "/contact" ? styles.activeLink : styles.nonActiveLink
        }
      >
        Contact
        <div className={styles.underline} />
      </Link>
    </div>
  );
};

export default NavDesktopMenu;

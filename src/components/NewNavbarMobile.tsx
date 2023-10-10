"use client";
import { useState } from "react";
//@ts-ignore
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import "./NewNavbarMobile.css";

const NewNavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // @ts-ignore
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };
  return (
    <div className="navbar-mobile-container">
      <Menu
        right
        width="50%"
        isOpen={menuOpen}
        // @ts-ignore
        onStateChange={(state) => handleStateChange(state)}
        itemListElement="div"
        styles={{}}
      >
        <Link
          id="accueil"
          className="menu-item"
          href="/"
          onClick={() => closeMenu()}
        >
          Accueil
        </Link>
        <div className="separator" />
        <Link
          id="consultations"
          className="menu-item"
          href="/consultations"
          onClick={() => closeMenu()}
        >
          Consultations
        </Link>
        <div className="separator" />
        <Link
          id="pilates"
          className="menu-item"
          href="/pilates"
          onClick={() => closeMenu()}
        >
          Pilates
        </Link>
        <div className="separator" />
        <Link
          id="tarifs"
          className="menu-item"
          href="/tarifs"
          onClick={() => closeMenu()}
        >
          Tarifs
        </Link>
        <div className="separator" />
        <Link
          id="contact"
          className="menu-item"
          href="/contact"
          onClick={() => closeMenu()}
        >
          Contact
        </Link>
      </Menu>
    </div>
  );
};

export default NewNavbarMobile;

"use client";

import React, { useState } from "react";
import Link from "next/link";
// @ts-ignore
import { slide as Menu } from "react-burger-menu";
import "./NavbarMobile.css";

export default function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // @ts-ignore
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  return (
    <div id="outer-container">
      <Menu
        right
        width="50%"
        isOpen={menuOpen}
        // @ts-ignore
        onStateChange={(state) => handleStateChange(state)}
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
      <div id="page-wrap">
        <div className="navbar">
          <Link
            id="accueil"
            className="logoContainer"
            href="/"
            onClick={() => closeMenu()}
          >
            <img className="logoImage" src="/cloclo_logo.png" alt="" />
          </Link>

          <h1 className="chloeTitle">Chloé Bailly</h1>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import ActivePageIcon from "./ActivePageIcon";
import NonActivePageIcon from "./NonActivePageIcon";

interface PropTypes {
  id: number;
  title: string;
  dataText: string[];
  currentItem: number;
  onSlideChange: (newIndex: number) => void;
}

const CarouselTextContent = ({
  id,
  title,
  dataText,
  onSlideChange,
}: PropTypes) => {
  const [currentId, setCurrentId] = useState(id);
  const [contentVisible, setContentVisible] = useState(false);

  const handleSetId = (id: number) => {
    setCurrentId(id);
    setContentVisible(false); // Masquer le contenu
    setTimeout(() => {
      setContentVisible(true); // Réactiver progressivement après un court délai
      onSlideChange(id - 1); // Appeler la fonction de mise à jour du parent
    }, 500); // Ajustez la durée selon vos besoins
  };
  const pageIcons = [];
  for (let i = 0; i < 5; i++) {
    if (i === currentId - 1) {
      pageIcons.push(
        <ActivePageIcon key={i} onClick={() => handleSetId(i + 1)} />
      );
    } else {
      pageIcons.push(
        <NonActivePageIcon key={i} onClick={() => handleSetId(i + 1)} />
      );
    }
  }

  // Définir une fonction pour changer automatiquement de page toutes les 2 secondes
  const autoChangePage = () => {
    const nextPageId = (currentId % 5) + 1; // Changer de page circulairement
    handleSetId(nextPageId);
  };

  useEffect(() => {
    const titleElement = document.querySelector(".carousel-title");
    const listElement = document.querySelector(".carousel-list");
    //@ts-ignore
    titleElement.classList.add("opacity-0");
    //@ts-ignore
    listElement.classList.add("opacity-0");
    setTimeout(() => {
      //@ts-ignore
      titleElement.classList.remove("opacity-0");
      //@ts-ignore
      listElement.classList.remove("opacity-0");
    }, 1000);

    // Lancer le changement automatique de page toutes les 2 secondes
    const autoChangeInterval = setInterval(autoChangePage, 10000);

    // Nettoyer l'intervalle lors de la désactivation du composant
    return () => clearInterval(autoChangeInterval);
  }, [currentId]);

  return (
    <div className="mx-10 md:mx-20 lg:mx-32 mt-8 md:mt-16 flex flex-col items-center ">
      <h2
        className={`h-[100px] uppercase text-white font-prata  max-[380px]:text-base text-lg mg:text-xl lg:text-3xl xl:text-3xl tracking-[6px] text-center  leading-normal xl:leading-normal max-[380px]:mb-16 mb-20 sm:mb-8 lg:mb-20 opacity-${
          contentVisible ? "100" : "0"
        } transition-opacity duration-500 carousel-title`}
      >
        {title}
      </h2>
      <div className="h-[300px] px-2 sm:px-0 opacity-0 transition-opacity duration-300 carousel-list">
        <ul className="leading-3 lg:leading-8">
          {dataText.map((text, index) => (
            <li
              key={index}
              className={`list-disc text-white max-[390px]:text-xs text-sm md:text-base lg:text-xl font-extralight tracking-wider mb-4`}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[250px] mt-24 sm:mt-8 text-white  flex items-center justify-center gap-4">
        {pageIcons}
      </div>
    </div>
  );
};

export default CarouselTextContent;

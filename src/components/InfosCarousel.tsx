"use client";
import { useState, useEffect } from "react";
import data from "../data/data.json";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import CarouselTextContent from "./carousel/CarouselTextContent";

const InfosCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSetIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-[380px]:h-[650px] h-[700px] sm:h-[650px] lg:h-[750px] bg-[url('/tableau-banner.png')] bg-center sm:bg-cover sm:bg-right flex justify-center ">
      {
        // Ajoutez des classes pour gérer l'opacité
        <CarouselTextContent
          id={data[currentIndex].id}
          title={data[currentIndex].title}
          dataText={data[currentIndex].data}
          currentItem={currentIndex + 1}
          onSlideChange={handleSetIndex}
        />
      }
    </div>
  );
};

export default InfosCarousel;

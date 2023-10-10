import BannerTarifs from "@/components/tarifs/BannerTarifs";
import TarifsConsult from "@/components/tarifs/TarifsConsult";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tarifs des Consultations de Diététique et du Coaching Pilates à Lille",
  description:
    "Consultez les tarifs compétitifs pour des consultations de diététique et du coaching Pilates avec Chloé Bailly à Lille. Elle propose des options flexibles pour répondre à vos besoins, que ce soit pour améliorer votre alimentation ou renforcer votre corps. Découvrez ses prix abordables et investissez dans votre bien-être.",
};

const Tarifs = () => {
  return (
    <main>
      <BannerTarifs />
      <TarifsConsult />
    </main>
  );
};

export default Tarifs;

import BannerConsult from "@/components/consultations/BannerConsult";
import PriseEnCharge from "@/components/consultations/PriseEnCharge";
import PourquoiConsulter from "@/components/consultations/PourquoiConsulter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultations de Diététique Personnalisée à Lille",
  description:
    "Découvrez les consultations de diététique personnalisée avec Chloé Bailly, diététicienne nutritionniste à Lille. Transformez votre vie grâce à une nutrition adaptée à vos besoins. Explorez les bienfaits d'une alimentation saine pour une santé optimale.",
};

const Consultations = () => {
  return (
    <main className="mt-[100px] lg:mt-36">
      <BannerConsult />
      <PriseEnCharge />
      <PourquoiConsulter />
    </main>
  );
};

export default Consultations;

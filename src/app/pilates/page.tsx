import BannerPilates from "@/components/pilates/BannerPilates";
import PilatesXp from "../../components/pilates/PilatesXp";
import CoursPilates from "@/components/pilates/CoursPilates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaching Pilates Personnalisé à Lille avec Chloé Bailly",
  description:
    "Découvrez le monde du Pilates avec Chloé Bailly, coach expérimentée basée à Lille. Profitez de ses années d'expertise dans cette discipline pour améliorer votre posture, renforcer votre corps et augmenter votre flexibilité. Explorez ses offres de coaching, qu'il s'agisse de séances individuelles pour une attention personnalisée, de cours en groupe à domicile pour plus de convivialité, ou de sessions en entreprise pour favoriser le bien-être au travail. Transformez votre vie grâce au Pilates.",
};

const Pilates = () => {
  return (
    <main>
      <BannerPilates />
      <PilatesXp />
      <CoursPilates />
    </main>
  );
};

export default Pilates;

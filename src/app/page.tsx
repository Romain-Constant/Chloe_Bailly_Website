import Banner from "@/components/accueil/Banner";
import PresentationSection from "@/components/accueil/PresentationSection";
import MethodSection from "@/components/accueil/MethodSection";
import SuiviGrossesse from "@/components/accueil/SuiviGrossesse";
import CoachPilatesSection from "@/components/accueil/CoachPilatesSection";
import ContactSection from "@/components/accueil/ContactSection";

export default function Home() {
  return (
    <main className="mt-[100px] lg:mt-36">
      <Banner />
      <PresentationSection />
      <MethodSection />
      <SuiviGrossesse />
      <CoachPilatesSection />
      <ContactSection />
    </main>
  );
}

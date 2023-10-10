import BannerContact from "@/components/contact/BannerContact";
import ResultatsSection from "@/components/contact/ResultatsSection";
import ContactForm from "@/components/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contactez Chloé Bailly pour Garantir Votre Succès en Diététique et Pilates",
  description:
    "Je suis là pour vous aider à réussir dans votre parcours vers une meilleure santé et un bien-être optimal. Contactez Chloé Bailly, diététicienne et coach Pilates à Lille, pour obtenir des conseils personnalisés. Vous pouvez me joindre par e-mail à l'adresse chloebailly.dieteticienne@outlook.fr ou par téléphone au 06.87.48.40.63. De plus, n'hésitez pas à utiliser le formulaire de contact ci-dessous pour me faire part de vos questions ou demandes. Je suis impatiente de vous accompagner vers le succès.",
};

const Contact = () => {
  return (
    <main className="mt-[100px] lg:mt-36">
      <BannerContact />
      <ResultatsSection />
      <ContactForm />
    </main>
  );
};

export default Contact;

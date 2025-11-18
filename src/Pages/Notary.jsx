import { useState } from "react";
import Footer from "../Components/Pages/Footer";
import OtherPageHeroSection from "../Components/Pages/OtherPageHeroSection";

import ConsultationModal from "../Components/Pages/ConsultationModal";
import NotarizationSection from "../Components/Pages/NotarizationSection";
import NotaryContact from "../Components/Pages/NotaryContact";
function Notary() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />

      <OtherPageHeroSection
        title="NOTARIZATION"
        subtitle="Notarize Your Documents — Online, Securely, and Legally"
        descript="Migraid’s Online Public Notary service lets you notarize your documents from anywhere — fast, secure, and compliant with U.S. law."
      />

      <NotarizationSection />

      <NotaryContact />

      <Footer />
    </>
  );
}

export default Notary;

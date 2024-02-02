import { useRef } from "react";
import { Header } from "../components/Header";
import { Background } from "../components/BackgroundSection";
import { AboutUs } from "../components/AboutUsSection";
import { SectionOne } from "../components/SectionOne";
import { ServicesSection } from "../components/ServicesSection";
import { SectionTwo } from "../components/SectionTwo";
import { Customers } from "../components/Customers";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/FooterSection";

function App() {
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header
        scrollToSection={(section) => {
          scrollTo(section === "AboutUsSection" ? aboutUsRef : "");
          scrollTo(section === "ServicesSection" ? servicesRef : "");
          scrollTo(section === "ContactSection" ? contactRef : "");
        }}
      />
      <Background
        scrollToSection={(section) => {
          scrollTo(section === "ContactSection" ? contactRef : "");
        }}
      />
      <AboutUs
        sectionRef={aboutUsRef}
        scrollToSection={(section) => {
          scrollTo(section === "ServicesSection" ? servicesRef : "");
        }}
      />
      <SectionOne
        scrollToSection={(section) => {
          scrollTo(section === "ContactSection" ? contactRef : "");
        }}
      />
      <ServicesSection
        sectionRef={servicesRef}
        scrollToSection={(section) => {
          scrollTo(section === "ContactSection" ? contactRef : "");
        }}
      />
      <SectionTwo />
      <Customers />
      <ContactSection sectionRef={contactRef} />
      <Footer
        scrollToSection={(section) => {
          scrollTo(section === "AboutUsSection" ? aboutUsRef : "");
          scrollTo(section === "ServicesSection" ? servicesRef : "");
        }}
      />
    </>
  );
}

export default App;

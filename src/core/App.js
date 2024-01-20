import { useRef } from "react";
import { Background } from "../components/Background";
import { Contact } from "../components/Contact";
import { Customers } from "../components/Customers";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SectionFive } from "../components/SectionFive";
import { SectionFour } from "../components/SectionFour";
import { SectionOne } from "../components/SectionOne";
import { SectionThree } from "../components/SectionThree";
import { SectionTwo } from "../components/SectionTwo";

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
          scrollTo(section === "SectionOne" ? aboutUsRef : "");
          scrollTo(section === "SectionThree" ? servicesRef : "");
          scrollTo(section === "Contact" ? contactRef : "");
        }}
      />
      <Background />
      <SectionOne sectionRef={aboutUsRef} />
      <SectionTwo />
      <SectionThree sectionRef={servicesRef} />
      <SectionFour />
      <SectionFive />
      <Customers />
      <Contact sectionRef={contactRef} />
      <Footer />
    </>
  );
}

export default App;

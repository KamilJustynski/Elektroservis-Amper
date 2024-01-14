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
  return (
    <>
      <Header />
      <Background />
      <SectionOne />
      <SectionTwo />
      {/* <SectionThree /> */}
      <SectionFour />
      <SectionFive />
      <Customers />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

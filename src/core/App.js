import { Background } from "../components/Background";
import { Customers } from "../components/Customers";
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
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Customers />
    </>
  );
}

export default App;

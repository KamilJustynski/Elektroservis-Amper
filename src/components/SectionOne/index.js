import {
  Container,
  DescriptionWrapper,
  Title,
  Description,
  ServicesAndContact,
  Services,
  Contact,
  ImageWrapper,
} from "./styled";

export const SectionOne = () => (
  <Container>
    <DescriptionWrapper>
      <Title>O nas</Title>
      <Description>
        Jesteśmy wiodącą firmą specjalizującą się w dziedzinie
        <br /> pomiarów elektronicznych oraz pomiarów informatycznych (IT).
        <br />
        Nasza firma, założona w [rok założenia], zdobyła uznanie na
        <br /> rynku dzięki profesjonalizmowi, zaawansowanej technologii oraz
        <br />
        pasji do innowacji. Naszym celem jest dostarczanie klientom
        <br /> rozwiązań pomiarowych najwyższej jakości, które pozwalają na
        <br />
        optymalizację ich działań i zapewnienie niezawodności
        <br /> systemów elektronicznych.
      </Description>
      <ServicesAndContact>
        <Services>Nasze usługi</Services>
        <Contact>Skontaktuj się z nami</Contact>
      </ServicesAndContact>
    </DescriptionWrapper>
    <ImageWrapper></ImageWrapper>
  </Container>
);

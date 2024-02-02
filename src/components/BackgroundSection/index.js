import {
  Container,
  MainText,
  SecondText,
  Button,
  Ellipse,
  Wrapper,
} from "./styled";

export const Background = ({ scrollToSection }) => (
  <Container>
    <MainText>
    Zobacz co oferujemy w
      <br />
     zakresie elektryki,IT i nie tylko
    </MainText>
    <SecondText>
      Jesteśmy Twoim zaufanym partnerem w dziedzinie
      <br /> pomiarów elektrycznych, instalacji elektrycznych, pomiary
      <br /> IT i instalacji IT.
    </SecondText>
    <Button onClick={() => scrollToSection("ContactSection")}>
      <span>Skontaktuj sie z nami</span>
    </Button>
    <Wrapper>
      <Ellipse />
      {/* <Ellipse /> */}
      {/* <Ellipse /> */}
      {/* <Ellipse /> */}
    </Wrapper>
  </Container>
);


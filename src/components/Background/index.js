import {
  Container,
  MainText,
  SecondText,
  Button,
  Ellipse,
  Wrapper,
} from "./styled";

export const Background = () => (
  <Container>
    <MainText>
      Witaj w Światowej
      <br />
      Klasie Elektryki i IT
    </MainText>
    <SecondText>
      Jesteśmy Twoim zaufanym partnerem w dziedzinie
      <br /> pomiarów elektrycznych, instalacji elektrycznych, pomiary
      <br /> IT i instalacji IT.
    </SecondText>
    <Button>Skontaktuj sie z nami</Button>
    <Wrapper>
      <Ellipse />
      <Ellipse />
      <Ellipse />
      <Ellipse />
    </Wrapper>
  </Container>
);

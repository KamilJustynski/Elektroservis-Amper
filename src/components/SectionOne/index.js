import { Button, Text } from "../Header/styled";
import {
  Container,
  GridItem,
  Headline,
  Title,
  Description,
  Image,
  Wrapper,
} from "./styled";
import pictureOne from "./pictureOne.png";
import pictureTwo from "./pictureTwo.png";

export const SectionOne = ({ scrollToSection }) => (
  <Container>
    <GridItem>
      <Image src={pictureOne} />
    </GridItem>
    <GridItem>
      <Wrapper>
        <Headline>Czym zajmujemy sie w elektryce?</Headline>
        <Title>Instalacje elektryczne</Title>
        <Description>
          Profesjonalne instalacje elektryczne zgodne z projektami i
          indywidualnymi potrzebami. Wykonujemy kompleksowe usługi elektryczne,
          gwarantując solidność i bezpieczeństwo. Skorzystaj z naszych
          doświadczeń w instalacjach elektrycznych na miarę Twoich oczekiwań.
        </Description>
        <Button onClick={() => scrollToSection("ContactSection")}>
          <Text>
            <span>Nasza oferta</span>
          </Text>
        </Button>
      </Wrapper>
    </GridItem>
    <GridItem>
      <Wrapper>
        <Headline>Czym zajmujemy sie w IT?</Headline>
        <Title>Instalacje IT</Title>
        <Description>
          Tworzymy kompleksowe sieci dostosowane do indywidualnych potrzeb
          klienta. Oferujemy profesjonalne przeglądy, serwisy oraz naprawy na
          telefon zlecony. Wykonujemy pomiary certyfikowanej osoby, które
          dołączamy po zakończonym zleceniu. Działamy z myślą o bezpieczeństwie
          i pełnej satysfakcji klienta.
        </Description>
        <Button onClick={() => scrollToSection("ContactSection")}>
          <Text>
            <span>Nasza oferta</span>
          </Text>
        </Button>
      </Wrapper>
    </GridItem>
    <GridItem>
      <Image src={pictureTwo} />
    </GridItem>
  </Container>
);

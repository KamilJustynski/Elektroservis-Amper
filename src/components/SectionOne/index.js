import {
  Container,
  DescriptionWrapper,
  Title,
  Description,
  Services,
  ImageWrapper,
  Image,
  List,
  ListItem,
} from "./styled";
import Picture from "./image.png";

export const SectionOne = () => (
  <Container>
    <DescriptionWrapper>
      <Title>O nas</Title>
      <Description>
        Jesteśmy firmą specjalizującą się w dziedzinach:
        <List>
          <ListItem>instalacji elektrycznych,</ListItem>
          <ListItem>instalacji SAP, SSWIN, CCTV, KD, IT,</ListItem>
          <ListItem>pomiary elektryczne,</ListItem>
          <ListItem>pomiary sieci IT.</ListItem>
        </List>
        W wyżej wymienionych dziedzinach zajmujemy się rownież serwisem
        pogwarancyjnym. Nasza firma zdobyła uznanie na rynku dzięki
        profesjonalizmowi, doświadczeniu i zaawansowanej technologii oraz pasji
        do innowacji. Naszym celem jest dostarczanie klientom rozwiązań i usług
        wysokiej jakości, które pozwalają na optymalizację ich działań i
        zapewnienie niezawodności wykonanych systemów.
      </Description>
      <Services>
        <span>Nasze usługi</span>
      </Services>
    </DescriptionWrapper>
    <ImageWrapper>
      <Image src={Picture} alt="electrical box" />
    </ImageWrapper>
  </Container>
);

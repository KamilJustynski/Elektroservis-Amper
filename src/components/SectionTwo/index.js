import {
  Container,
  WrapperFirst,
  WrapperSecond,
  Title,
  Description,
  Option,
  Design,
  Service,
  ShortDescription,
  More,
} from "./styled";

export const SectionTwo = () => (
  <Container>
    <WrapperFirst>
      <Title>Serwis elektryczny</Title>
      <Description>
        Profesjonalny serwis elektryczny oferuje kompleksowe przeglądy, naprawy
        i konserwację. Nasza doświadczona ekipa działa szybko, zapewniając
        bezpieczeństwo i efektywność instalacji elektrycznych. Skorzystaj z
        naszych usług, aby utrzymać systemy w doskonałej kondycji.
      </Description>
    </WrapperFirst>
    <WrapperSecond>
      <Option>
        <Design />
        <Service>Stały</Service>
        <ShortDescription>
          Serwis elektryczny stały - bezpieczeństwo i niezawodność na co dzień.
        </ShortDescription>
        <More href="tel:509768781">Zadzwoń</More>
      </Option>
      <Option>
        <Design />
        <Service>Doraźny</Service>
        <ShortDescription>
          Serwis elektryczny doraźny zapewnia szybkie interwencje i skuteczne
          naprawy w nagłych przypadkach{" "}
        </ShortDescription>
        <More href="tel:509768781">Zadzwoń</More>
      </Option>
      <Option>
        <Design />
        <Service>Okresowy</Service>
        <ShortDescription>
          Serwis elektryczny okresowy obejmuje kompleksową opiekę, z naciskiem
          na pomiary, dbając o trwałość i efektywność instalacji elektrycznych{" "}
        </ShortDescription>
        <More href="tel:509768781">Zadzwoń</More>
      </Option>
    </WrapperSecond>
  </Container>
);

import {
  Container,
  GridWrapper,
  GridItem,
  Title,
  Polygon,
  Wrapper,
  Name,
  Article,
  Button,
  FlexWrapper
} from "./styled";

export const SectionThree = ({sectionRef}) => (
  <Container ref={sectionRef}>
    <Wrapper>
      <Name>Pomiary</Name>
      <Article>
          Dzięki ciągłemu rozwojowi technologicznemu oraz pogłebianiu wiedzy o
          nowinki i rozwiązania idące z postępem możemy dostraczyć Państwu
          narzędzia niezbędne do osiągnięcia doskonałych wyników w swoich
          projektach.
      </Article>
      <Button>
        <span>Skontaktuj się z nami</span>
      </Button>
    </Wrapper>
    <GridWrapper>
      <GridItem>
        <FlexWrapper>
          <Polygon />
          <Title>Rezystancji izolacji kabli i przewodów</Title>
        </FlexWrapper>
      </GridItem>
      <GridItem>
        <FlexWrapper>
          <Polygon />
          <Title>Natężenia oświetlania podstawowego, AW i EW</Title>
        </FlexWrapper>
      </GridItem>
      <GridItem>
        <FlexWrapper>
          <Polygon />
          <Title>Wyłączników RCD</Title>
        </FlexWrapper>
      </GridItem>
      <GridItem>
        <FlexWrapper>
          <Polygon />
          <Title>Podłóg ESD</Title>
        </FlexWrapper>
      </GridItem>
      <GridItem>
        <FlexWrapper>
          <Polygon />
          <Title>Skuteczności ochrony od porażeń</Title>
        </FlexWrapper>
      </GridItem>
      <GridItem>
        <FlexWrapper>
          <Polygon />
          <Title>Instalacji odgromowych</Title>
        </FlexWrapper>
      </GridItem>
    </GridWrapper>
  </Container>
);

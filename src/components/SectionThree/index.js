import {
  Container,
  GridWrapper,
  GridItem,
  Title,
  Description,
  Wrapper,
  Name,
  Article,
  Button,
} from "./styled";

export const SectionThree = () => (
  <Container>
    <GridWrapper>
      <GridItem>
        <Title>Pomiar 1</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur. Libero a sem purus arcu. Morbi
          ut leo vestibulum urna nec. Sed nulla volutpat posuere mauris.
        </Description>
      </GridItem>
      <GridItem>
        <Title>Pomiar 2</Title>
        <Description>
          Dolor etiam bibendum nam nulla tempus auctor amet. Penatibus in elit
          neque bibendum habitant odio malesuada ullamcorper.
        </Description>
      </GridItem>
      <GridItem>
        <Title>Pomiar 3</Title>
        <Description>
          Nunc sit ac posuere sed aliquam ultrices mattis. At aliquet praesent
          eu at lacus euismod praesent.
        </Description>
      </GridItem>
      <GridItem>
        <Title>Pomiar 4</Title>
        <Description>
          Eget sed nunc quisque at tristique in urna faucibus tellus.
          Condimentum sed a natoque bibendum.
        </Description>
      </GridItem>
    </GridWrapper>
    <Wrapper>
      <Name>Pomiary</Name>
      <Article>
        <strong>
          Dzięki ciągłemu rozwojowi technologicznemu i pasji do doskonałości,
          możemy dostarczyć Państwu narzędzia niezbędne do osiągnięcia
          doskonałych wyników w swoich projektach i badaniach.
        </strong>
        <br /> <br />W dzisiejszym dynamicznym świecie, precyzja i niezawodność
        pomiarów elektronicznych są kluczowe dla sukcesu. Nasza firma, od lat
        lider na rynku pomiarów elektronicznych, zapewnia najwyższą jakość i
        dokładność w dziedzinie pomiarów.
      </Article>
      <Button>
        <span>Skontaktuj się z nami</span>
      </Button>
    </Wrapper>
  </Container>
);

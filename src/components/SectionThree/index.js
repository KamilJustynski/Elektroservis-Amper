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
        <Title>Rezystancji izolacji kabli i przewodów</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur. Libero a sem purus arcu. Morbi
          ut leo vestibulum urna nec. Sed nulla volutpat posuere mauris.
        </Description>
      </GridItem>
      <GridItem>
        <Title>Skuteczności ochrony od porażeń</Title>
        <Description>
          Dolor etiam bibendum nam nulla tempus auctor amet. Penatibus in elit
          neque bibendum habitant odio malesuada ullamcorper.
        </Description>
      </GridItem>
      <GridItem>
        <Title>Wyłączników RCD</Title>
        <Description>
          Nunc sit ac posuere sed aliquam ultrices mattis. At aliquet praesent
          eu at lacus euismod praesent.
        </Description>
      </GridItem>
      <GridItem>
        <Title>Instalacji odgromowych</Title>
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
          Dzięki ciągłemu rozwojowi technologicznemu oraz pogłebianiu wiedzy o
          nowinki i rozwiązania idące z postępem możemy dostraczyć Państwu
          narzędzia niezbędne do osiągnięcia doskonałych wyników w swoich
          projektach.
        </strong>
      </Article>
      <Button>
        <span>Skontaktuj się z nami</span>
      </Button>
    </Wrapper>
  </Container>
);

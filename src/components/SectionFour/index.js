import {
  Wrapper,
  SectionTitle,
  Image,
  ImageWrapper,
  Container,
  GridWrapper,
  GridItem,
  Title,
  Description,
  SectionTitleMobile
} from "./styled";
import Picture from "./image.png";

export const SectionFour = () => (
  <Container center>
    <SectionTitleMobile>Serwis elektryczny</SectionTitleMobile>
    <ImageWrapper>
      <Image src={Picture} alt="Electrical box" />
    </ImageWrapper>
    <Wrapper>
      <SectionTitle>Serwis elektryczny</SectionTitle>
      <GridWrapper>
        <GridItem>
          <Title>Rezystancji izolacji kabli i przewodów</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur. Libero a sem purus arcu.
            Morbi ut leo vestibulum urna nec. Sed nulla volutpat posuere mauris.
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
    </Wrapper>
  </Container>
);
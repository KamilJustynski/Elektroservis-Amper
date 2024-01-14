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

export const SectionFive = () => (
  <Container>
    <WrapperFirst>
      <Title>Serwis elektryczny</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur. Cursus ultricies nunc nibh lacus
        rhoncus est fames ultricies. Euismod ac nulla ac turpis. Nulla molestie
        praesent ullamcorper aliquet rutrum tortor vel lacus. Amet etiam.
      </Description>
    </WrapperFirst>
    <WrapperSecond>
      <Option>
        <Design />
        <Service>Serwis 1</Service>
        <ShortDescription>
          Lorem ipsum dolor sit amet consectetur. Libero a sem purus arcu.{" "}
        </ShortDescription>
        <More>Czytaj więcej</More>
      </Option>
      <Option>
        <Design />
        <Service>Serwis 1</Service>
        <ShortDescription>
          Lorem ipsum dolor sit amet consectetur. Libero a sem purus arcu.{" "}
        </ShortDescription>
        <More>Czytaj więcej</More>
      </Option>
      <Option>
        <Design />
        <Service>Serwis 1</Service>
        <ShortDescription>
          Lorem ipsum dolor sit amet consectetur. Libero a sem purus arcu.{" "}
        </ShortDescription>
        <More>Czytaj więcej</More>
      </Option>
    </WrapperSecond>
  </Container>
);
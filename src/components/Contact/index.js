import {
  Container,
  WrapperLeft,
  Title,
  NumberAndTel,
  Tel,
  Handset,
  Envelope,
  Telephone,
  Mail,
  Email,
  WrapperRight,
  YourEmail,
  Message,
  Button,
} from "./styled";

export const Contact = () => (
  <Container>
    <WrapperLeft>
      <Title>Skontaktuj się z nami</Title>
      <NumberAndTel>
        <Tel>
          <Handset />
          <Telephone href="tel:+48509768781">+48 509 768 781</Telephone>
        </Tel>
        <Mail>
          <Envelope />
          <Email href="mailto:amperowski64@wp.pl">amperowski64@wp.pl</Email>
        </Mail>
      </NumberAndTel>
      <NumberAndTel>
        <Tel>
          <Handset />
          <Telephone href="tel:+48666900181">+48 666 900 181</Telephone>
        </Tel>
        <Mail>
          <Envelope />
          <Email href="mailto:wlodarski.dvy@gmail.pl">wlodarski.dvy@gmail.pl</Email>
        </Mail>
      </NumberAndTel>
    </WrapperLeft>
    <WrapperRight>
      <YourEmail placeholder="E-mail" />
      <Message type="text" placeholder="Wiadomość..." />
      <Button>
        <span>Wyślij</span>
      </Button>
    </WrapperRight>
  </Container>
);


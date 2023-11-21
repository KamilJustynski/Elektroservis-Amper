import {
  Container,
  Menu,
  Title,
  Options,
  Option,
  Contact,
  LogoContainer,
  Image,
} from "./styled";
import {
  NumberAndTel,
  Tel,
  Handset,
  Telephone,
  Mail,
  Envelope,
  Email,
} from "../Contact/styled";
import logo from "../Header/logo.png";

export const Footer = () => (
  <Container>
    <Menu>
      <Title>Menu:</Title>
      <Options>
        <Option>O nas</Option>
        <Option>Realizacje</Option>
        <Option>Usługi</Option>
      </Options>
    </Menu>
    <Contact>
      <Title>Kontakt:</Title>
      <NumberAndTel>
        <Tel>
          <Handset />
          <Telephone white href="tel:+48509768781">
            +48 509 768 781
          </Telephone>
        </Tel>
        <Mail>
          <Envelope />
          <Email white href="mailto:amperowski64@wp.pl">
            amperowski64@wp.pl
          </Email>
        </Mail>
      </NumberAndTel>
      <NumberAndTel>
        <Tel>
          <Handset />
          <Telephone white href="tel:+48509768781">
            +48 509 768 781
          </Telephone>
        </Tel>
        <Mail>
          <Envelope />
          <Email white href="mailto:amperowski64@wp.pl">
            amperowski64@wp.pl
          </Email>
        </Mail>
      </NumberAndTel>
    </Contact>
    <LogoContainer>
      <Image src={logo} />
    </LogoContainer>
  </Container>
);

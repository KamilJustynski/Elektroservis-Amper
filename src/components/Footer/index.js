import {
  Container,
  Menu,
  Title,
  Options,
  Option,
  Contact,
  LogoContainer,
  Wrapper,
  Image,
  NumberAndTel,
  Tel,
  Telephone,
  Mail,
  Email,
  Box,
  MobileFooter,
  Facebook,
  Instagram,
} from "./styled";
import logo from "../Header/logo.png";

export const Footer = () => (
  <Container>
    <Wrapper>
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
        <Box>
          <NumberAndTel>
            <Tel>
              <Telephone href="tel:+48509768781">+48 509 768 781</Telephone>
            </Tel>
            <Mail>
              <Email href="mailto:amperowski64@wp.pl">amperowski64@wp.pl</Email>
            </Mail>
          </NumberAndTel>
          <NumberAndTel>
            <Tel>
              <Telephone href="tel:+48509768781">+48 509 768 781</Telephone>
            </Tel>
            <Mail>
              <Email href="mailto:amperowski64@wp.pl">amperowski64@wp.pl</Email>
            </Mail>
          </NumberAndTel>
        </Box>
      </Contact>
      <MobileFooter>
        <Instagram />
        <Facebook />
      </MobileFooter>
    </Wrapper>
    <LogoContainer>
        <Image src={logo} />
    </LogoContainer>
  </Container>
);

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
  Separator,
} from "./styled";
import logo from "../Header/logo.png";

export const Footer = ({ scrollToSection }) => (
  <Container>
    <Wrapper>
      <Menu>
        <Title>Menu:</Title>
        <Options>
          <Option onClick={() => scrollToSection("AboutUsSection")}>O nas</Option>
          {/* <Option>Realizacje</Option> */}
          <Option onClick={() => scrollToSection("ServicesSection")}>
            Usługi
          </Option>
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
          <Separator>Główny instalator CCTV/SAP/SSWIN/IT/KD</Separator>
          <NumberAndTel>
            <Tel>
              <Telephone href="tel:+48666900181">+48 666 900 181</Telephone>
            </Tel>
            <Mail>
              <Email href="mailto:wlodarski.dvy@gmail.pl">
                wlodarski.dvy@gmail.pl
              </Email>
            </Mail>
          </NumberAndTel>
        </Box>
      </Contact>
      <MobileFooter>
        <Instagram href="" />
        <Facebook href="google.com" />
      </MobileFooter>
    </Wrapper>
    <LogoContainer>
      <Image src={logo} />
    </LogoContainer>
  </Container>
);

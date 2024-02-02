import {
  Container,
  Logo,
  Navigation,
  Option,
  Button,
  Text,
  Image,
  NavLogo,
  MobileNavigation,
  MobileContainer,
  MobileImg,
  MobileOptions,
  MobileOption,
  VectoreButton,
  Xmark,
} from "./styled";
import logo from "./logo.png";
import { useState } from "react";

export const Header = ({ scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Container>
      <Logo>
        <Image src={logo} />
      </Logo>
      <Navigation>
        <Option onClick={() => scrollToSection("AboutUsSection")}>O nas</Option>
        <Option onClick={() => scrollToSection("ServicesSection")}>
          Usługi
        </Option>
        {/* <Option>Realizacje</Option> */}
      </Navigation>
      <Button display onClick={() => scrollToSection("ContactSection")}>
        <Text>
          <span>Kontakt</span>
        </Text>
      </Button>
      <MobileNavigation onClick={toggleMobileMenu}>
        <NavLogo />
      </MobileNavigation>
      <MobileContainer
        style={{
          right: isMobileMenuOpen ? 0 : "-100%",
          display: isMobileMenuOpen ? "flex" : "none",
        }}
      >
        <MobileImg>
          <VectoreButton onClick={toggleMobileMenu}>
            <Xmark />
          </VectoreButton>
        </MobileImg>
        <MobileOptions onClick={toggleMobileMenu}>
          <MobileOption onClick={() => scrollToSection("AboutUsSection")}>
            O nas
          </MobileOption>
          <MobileOption onClick={() => scrollToSection("ServicesSection")}>
            Usługi
          </MobileOption>
          {/* <MobileOption>Realizacje</MobileOption> */}
          <MobileOption onClick={() => scrollToSection("ContactSection")}>
            Kontakt
          </MobileOption>
        </MobileOptions>
      </MobileContainer>
    </Container>
  );
};

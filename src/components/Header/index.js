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
  Vector,
  VectoreButton,
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
        <Option onClick={() => scrollToSection("SectionOne")}>O nas</Option>
        <Option onClick={() => scrollToSection("SectionThree")}>Usługi</Option>
        <Option>Realizacje</Option>
      </Navigation>
      <Button display onClick={() => scrollToSection("Contact")}>
        <Text>
          <span>Kontakt</span>
        </Text>
      </Button>
      <MobileNavigation onClick={toggleMobileMenu}>
        <NavLogo />
      </MobileNavigation>
      <MobileContainer
        style={{
          right: isMobileMenuOpen ? 0 : "-263px",
          display: isMobileMenuOpen ? "flex" : "none",
        }}
      >
        <MobileImg>
          <VectoreButton onClick={toggleMobileMenu}>
            <Vector />
          </VectoreButton>
        </MobileImg>
        <MobileOptions onClick={toggleMobileMenu}>
          <MobileOption onClick={() => scrollToSection("SectionOne")}>
            O nas
          </MobileOption>
          <MobileOption onClick={() => scrollToSection("SectionThree")}>
            Usługi
          </MobileOption>
          <MobileOption>Realizacje</MobileOption>
          <MobileOption onClick={() => scrollToSection("Contact")}>
            Kontakt
          </MobileOption>
        </MobileOptions>
      </MobileContainer>
    </Container>
  );
};

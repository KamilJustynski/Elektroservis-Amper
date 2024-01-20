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
} from "./styled";
import logo from "./logo.png";
import{ useState }from "react";

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
      <MobileContainer style={{ right: isMobileMenuOpen ? 0 : "-263px", display: isMobileMenuOpen ? 'flex' : 'none' }}>
        <MobileImg>
          <Vector />
        </MobileImg>
        <MobileOptions>
          <MobileOption>O nas</MobileOption>
          <MobileOption>Usługi</MobileOption>
          <MobileOption>Realizacje</MobileOption>
          <MobileOption>Kontakt</MobileOption>
        </MobileOptions>
      </MobileContainer>
    </Container>
  );
};

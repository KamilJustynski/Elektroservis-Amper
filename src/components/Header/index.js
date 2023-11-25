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
} from "./styled";
import logo from "./logo.png";

export const Header = () => (
  <Container>
    <Logo>
      <Image src={logo} />
    </Logo>
    <Navigation>
      <Option>O nas</Option>
      <Option>Usługi</Option>
      <Option>Realizacje</Option>
    </Navigation>
    <Button display>
      <Text>
        <span>Kontakt</span>
      </Text>
    </Button>
    <MobileNavigation>
      <NavLogo />
    </MobileNavigation>
  </Container>
);

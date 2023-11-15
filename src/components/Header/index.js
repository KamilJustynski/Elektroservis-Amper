import {
  Container,
  Logo,
  Navigation,
  Option,
  Button,
  Text,
  Image,
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
    <Button>
      <Text>
        <span>Kontakt</span>
      </Text>
    </Button>
  </Container>
);

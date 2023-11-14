import { Container, Logo, Navigation, Option, Button, Text } from "./styled";

export const Header = () => (
  <Container>
    <Logo>Logo</Logo>
    <Navigation>
      <Option>O nas</Option>
      <Option>Usługi</Option>
      <Option>Realizacje</Option>
    </Navigation>
    <Button>
      <Text>Kontakt</Text>
    </Button>
  </Container>
);

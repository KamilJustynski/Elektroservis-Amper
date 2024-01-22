import { Button, Text } from "../Header/styled";
import {
  Container,
  GridItem,
  Headline,
  Title,
  Description,
  Image,
  Wrapper,
} from "./styled";
import pictureOne from "./pictureOne.png";
import pictureTwo from "./pictureTwo.png";

export const SectionTwo = () => (
  <Container>
    <GridItem>
   
      <Image src={pictureOne} />
    
    </GridItem>
    <GridItem>
      <Wrapper>
        <Headline>Czym zajmujemy sie w IT?</Headline>
        <Title>Instalacje elektryczne</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur. Nam adipiscing fermentum
          platea purus at. Rhoncus id interdum mauris cursus enim velit. Diam
          fringilla elementum egestas diam convallis at blandit. Tellus sed
          aliquet amet habitasse nibh morbi elementum adipiscing sit. Faucibus
          sem ultrices est dolor convallis elit sem. Pharetra vestibulum leo
          sollicitudin interdum enim sed hendrerit nunc.
        </Description>
        <Button>
          <Text>
            <span>Nasza oferta</span>
          </Text>
        </Button>
      </Wrapper>
    </GridItem>
    <GridItem>
      <Wrapper>
        <Headline>Czym zajmujemy sie w IT?</Headline>
        <Title>Instalacje elektryczne</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur. Nam adipiscing fermentum
          platea purus at. Rhoncus id interdum mauris cursus enim velit. Diam
          fringilla elementum egestas diam convallis at blandit. Tellus sed
          aliquet amet habitasse nibh morbi elementum adipiscing sit. Faucibus
          sem ultrices est dolor convallis elit sem. Pharetra vestibulum leo
          sollicitudin interdum enim sed hendrerit nunc.
        </Description>
        <Button>
          <Text>
            <span>Nasza oferta</span>
          </Text>
        </Button>
      </Wrapper>
    </GridItem>
    <GridItem>
      <Image src={pictureTwo} />
    </GridItem>
  </Container>
);
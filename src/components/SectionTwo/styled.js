import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  margin-left: 40px;

  @media(max-width: 1200px) {
    margin-left: 30px;
  }

  @media(max-width: 1000px) {
    margin-left: 20px;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: ${({ theme }) => theme.colors.solitude};
`;

export const Headline = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 32px;
  position: relative;
  font-style: italic;

  &::after {
    content: "";
    position: absolute;
    left: 7%;
    bottom: -10px;
    width: 85px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.endeavour};
    transform: translateX(-50%);
  }

  @media(max-width: 1200px) {
    font-size: 22px;
  }

  @media(max-width: 1000px) {
    font-size: 18px;

    &::after {
    content: "";
    position: absolute;
    left: 10%;
    bottom: -10px;
    width: 85px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.endeavour};
    transform: translateX(-50%);
  }
  }

 
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 48px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 32px;

  @media(max-width: 1200px) {
    font-size: 38px;
  }

  @media(max-width: 1000px) {
    font-size: 32px;
  }
`;

export const Description = styled.article`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
  max-width: 574px;
  margin-bottom: 32px;
  flex-shrink: 0;

  @media(max-width: 1200px) {
    font-size: 16px;
  }

  @media(max-width: 1000px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 93px;
  margin: 140px 100px;

  ${({ center }) =>
    center &&
    css`
      align-items: center;
      margin: 140px 100px;
    `}

  @media(max-width: 1200px) {
    margin: 100px;
    justify-content: center; /* Wyśrodkowanie na mniejszych ekranach */
  }

  @media(max-width: 1000px) {
    margin: 100px;
    grid-template-columns: 1fr;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 458px;
  width: 100%;

  @media (max-width: 1000px) {
    max-width: 100%; /* Dostosowanie szerokości dla mniejszych ekranów */
  }

`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 0px 20px;
  box-shadow: -7px 7px 26px -9px ${({ theme }) => theme.colors.black};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 48px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 72px;
  position: relative;
  font-style: italic;

  &::after {
    content: "";
    position: absolute;
    left: 13%;
    bottom: -10px;
    width: 108px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.orange};
    transform: translateX(-50%);
  }

  @media (max-width: 1200px) {
    margin-bottom: 40px;
    font-size: 38px;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: flex-start;
  grid-gap: 64px;

  @media (max-width: 1200px) {
    grid-gap: 30px;
  }
`;

export const GridItem = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  max-width: 100%;

  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const Description = styled.article`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  height: auto;
  max-width: 100%;

  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 0 200px;
  background-color: ${({ theme }) => theme.colors.solitude};

  @media (max-width: 1440px) {
    padding: 50px 80px;
    gap: 100px;
  }

  @media (max-width: 1200px) {
    padding: 50px 80px;
    gap: 0
  }

  @media (max-width: 850px) {
    padding: 50px 40px;
  }

  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 540px) {
    padding: 50px 20px;
  }

  @media (max-width: 390px) {
    padding: 50px 10px;
  }
`;

export const Wrapper = styled.div`
  margin-left: 40px;

  @media (max-width: 1200px) {
    margin-left: 30px;
  }

  @media (max-width: 1000px) {
    margin-left: 20px;
  }

  @media (max-width: 660px) {
    margin: 70px 30px;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  width: 100%;

  @media (max-width: 1440px) {
    padding: 10px;
  }

  @media (max-width: 660px) {
    align-items: center;

    &:nth-child(2) {
      order: 1;
    }

    &:nth-child(1) {
      order: 2;
    }
  }

  @media (max-width: 540px) {
    padding: 0;
  }
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

  @media (max-width: 1440px) {
    font-size: 22px;
  }

  @media (max-width: 1200px) {
    margin: 0;
    font-size: 20px;
  }

  @media (max-width: 1000px) {
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

  @media (max-width: 850px) {
    font-size: 14px;
    margin-bottom: 20px;
    margin: 0;

    &::after {
      content: "";
      position: absolute;
      left: 11%;
      bottom: -10px;
      width: 85px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.endeavour};
      transform: translateX(-50%);
    }
  }

  @media (max-width: 660px) {
    font-size: 20px;

    &::after {
      content: "";
      position: absolute;
      left: 14%;
      bottom: -10px;
      width: 85px;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.endeavour};
      transform: translateX(-50%);
    }
  }

  @media (max-width: 540px) {
    font-size: 14px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 48px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 32px;

  @media (max-width: 1440px) {
    font-size: 38px;
  }

  @media (max-width: 1200px) {
    margin: 10px 0;
    font-size: 32px;
  }

  @media (max-width: 1000px) {
    font-size: 32px;
  }

  @media (max-width: 850px) {
    font-size: 22px;
    margin: 10px 0;
  }

  @media (max-width: 660px) {
    font-size: 38px;
  }

  @media (max-width: 540px) {
    font-size: 32px;
  }
`;

export const Description = styled.article`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
  max-width: 600px;
  margin-bottom: 32px;
  flex-shrink: 0;

  @media (max-width: 1200px) {
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media (max-width: 1000px) {
    font-size: 14px;
  }

  @media (max-width: 850px) {
    font-size: 12px;
    margin-bottom: 20px;
  }

  @media (max-width: 660px) {
    font-size: 16px;
  }

  @media (max-width: 540px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  max-width: 450px;
  max-height: auto;

  @media(max-width: 1200px) {
    width: 100%;
    max-height: 100%;
  }
`;

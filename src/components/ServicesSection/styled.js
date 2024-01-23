import styled, { css } from "styled-components";
import { ReactComponent as polygon } from "./polygon.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 140px 200px;

  @media (max-width: 1440px) {
    margin: 100px 80px;
    justify-content: center;
  }

  @media (max-width: 1200px) {
    gap: 40px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 100px;
  }

  @media (max-width: 850px) {
    margin: 50px 80px;
  }

  @media (max-width: 540px) {
    margin: 40px 40px;
  }

  @media (max-width: 390px) {
    margin: 40px 25px;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: flex-start;
  row-gap: 40px;
  column-gap: 50px;

  @media (max-width: 1200px) {
    column-gap: 40px;
  }

  @media (max-width: 440px) {
    column-gap: 20px;
  }

  @media (max-width: 390px) {
    column-gap: 10px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  max-width: 313px;
  height: auto;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: 1440px) {
    display: flex;
    height: auto;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
`;

export const GridItem = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: flex-start;
  max-width: 300px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  max-width: 300px;

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 850px) {
    font-size: 14px;
  }

  @media (max-width: 390px) {
    font-size: 12px;
  }
`;

export const Description = styled.article`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  width: 281px;
  height: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 36px;
  max-width: 500px;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 48px;
  font-weight: 400;
  font-style: italic;
  position: relative;
  flex-shrink: 0;
  margin: 0;

  @media (max-width: 1000px) {
    font-size: 38px;
  }

  @media (max-width: 850px) {
    font-size: 32px;
  }

  &::after {
    content: "";
    position: absolute;
    left: 27%;
    bottom: -10px;
    width: 108px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.sunglow};
    transform: translateX(-50%);
  }
`;

export const Article = styled.article`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  line-height: 1.3;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 16px 20px;
  border-radius: 20px 0px;
  background: ${({ theme }) => theme.colors.sunglow};
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 400;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
  font-style: italic;

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  span {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    color: ${({ theme }) => theme.colors.white};
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.kournikova};
    transition: width 0.5s ease, background 0.3s ease;
    z-index: 0;
  }

  &:hover::before {
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.kournikova};
  }
`;

export const Polygon = styled(polygon)`
  min-width: 20px;
  min-height: 20px;
`;

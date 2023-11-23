import styled from "styled-components";
import background from "./background.png";
import { ReactComponent as design } from "./design.svg";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 52px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 533px;
  flex-shrink: 0;
  margin-top: 119px 0 53px 0;
  overflow: hidden;
  margin-bottom: 98px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    z-index: -1;
    filter: brightness(50%);
  }
`;

export const WrapperFirst = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 355px;
  margin-top: 86px;
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 52px;

  @media(max-width: 1200px) {
    gap: 250px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 48px;
  font-weight: 400;
  margin: 0;
  position: relative;
  font-style: italic;

  &::after {
    content: "";
    position: absolute;
    left: 12%;
    bottom: -10px;
    width: 108px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    transform: translateX(-50%);
  }

  @media(max-width: 1200px) {
    font-size: 42px;

    &::after {
    content: "";
    position: absolute;
    left: 13%;
    bottom: -10px;
    width: 108px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    transform: translateX(-50%);
  }
  }
`;

export const Description = styled.article`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 400;
  margin: 0;

  @media(max-width: 1200px) {
    font-size: 16px;
  }
`;

export const WrapperSecond = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 96px;
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 86px;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;

export const Design = styled(design)`
  width: 46px;
  height: auto;
`;

export const Service = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
  font-weight: 600;
  margin: 0;

  @media(max-width: 1200px) {
    font-size: 28px;
  }
`;

export const ShortDescription = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  margin: 0;

  @media(max-width: 1200px) {
    font-size: 14px;
  }
`;

export const More = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  text-decoration-line: underline;
  cursor: pointer;

  @media(max-width: 1200px) {
    font-size: 14px;
  }
`;

import styled, { keyframes, css } from "styled-components";
import { ReactComponent as nav } from "./nav.svg";
import { ReactComponent as vector } from "./vector.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 19px 0;

  @media (max-width: 660px) {
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 30px;
  }
`;

export const Logo = styled.p`
  margin: 0;
  display: flex;
`;

export const Navigation = styled.div`
  display: inline-flex;
  gap: 80px;

  @media (max-width: 1440px) {
    gap: 40px;
  }
`;

const fadeInFromLeft = keyframes`
  from {
    width: 0;
  }
  to {
    width: 50%;
  }
`;

export const Option = styled.a`
  position: relative;
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 1200px) {
    font-size: 20px;
  }

  @media (max-width: 850px) {
    font-size: 16px;
  }

  @media (max-width: 660px) {
    display: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.nero};
    transition: 0.3s;
  }

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.endeavour};
    transition: width 0.3s ease;
  }

  &:hover::before {
    animation: ${fadeInFromLeft} 0.5s ease forwards;
  }
`;

export const Button = styled.button`
  padding: 16px 20px;
  border-radius: 20px 0px;
  background: ${({ theme }) => theme.colors.endeavour};
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 400;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
  font-style: italic;

  @media (max-width: 660px) {
    padding: 12px 14px;

    ${({ display }) =>
      display &&
      css`
        display: none;
      `}
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
    background-color: ${({ theme }) => theme.colors.sanMarino};
    transition: width 0.5s ease, background 0.3s ease;
    z-index: 0;
  }

  &:hover::before {
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.sanMarino};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 400;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 660px) {
    font-size: 16px;
  }

  @media (max-width: 540px) {
    font-size: 12px;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  margin: 0;
`;

export const NavLogo = styled(nav)`
  width: 27px;
  height: 27px;
`;

export const MobileNavigation = styled.button`
  display: flex;
  cursor: pointer;
  border: none;
  background: ${({ theme }) => theme.colors.white};

  @media (min-width: 661px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 263px;
  height: 500px;
  background: ${({ theme }) => theme.colors.black};
  position: absolute;
  top: 0;
  right: -263px;
  display: none;
  right: ${({ isVisible }) => (isVisible ? "0" : "-263px")};
  transition: right 0.3s ease;
`;

export const MobileOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileImg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 25px 33px;
`;

export const VectoreButton = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  border: none;
  cursor: pointer;
`;

export const Vector = styled(vector)`
  width: 9px;
  height: 18px;
`;

export const MobileOption = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-size: 28px;
  font-style: italic;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.black};
  border: none;
  display: flex;
  flex-direction: column;
  padding: 25px 0;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.sanMarino};
    transition: 0.3s;
  }

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.endeavour};
    transition: width 0.3s ease;
  }

  &:hover::before {
    animation: ${fadeInFromLeft} 0.5s ease forwards;
  }
`;

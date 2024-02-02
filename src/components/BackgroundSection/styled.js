import styled from "styled-components";
import { ReactComponent as ellipse } from "./ellipse.svg";
import backgroundImage from "./background.png"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 800px;
  flex-shrink: 0;
  margin-top: 119px 0 53px 0;
`;

export const MainText = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 64px;
  font-weight: 600;
  margin: 0;
  font-style: italic;

  @media (max-width: 850px) {
    font-size: 48px;
  }

  @media (max-width: 540px) {
    font-size: 38px;
  }
`;

export const SecondText = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  text-shadow: 5px 5px 20px black,-5px -5px 20px black,-5px 5px 20px black,5px -5px 20px black;
  @media (max-width: 850px) {
    font-size: 16px;
  }

  @media (max-width: 540px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 16px 20px;
  border-radius: 20px 0px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 400;
  border:2px solid white;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
  font-style: italic;

  @media (max-width: 850px) {
    font-size: 16px;
  }

  @media (max-width: 540px) {
    font-size: 12px;
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
    background-color: ${({ theme }) => theme.colors.blackNero};
    transition: width 0.5s ease, background 0.3s ease;
    z-index: 0;
  }

  &:hover::before {
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blackNero};
  }
`;

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 30px;
  opacity: 0.5;
`;

export const Ellipse = styled(ellipse)`
  width: 16px;
  height: 16px;
`;

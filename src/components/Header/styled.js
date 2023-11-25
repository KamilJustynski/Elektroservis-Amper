import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 19px 0;
`;

export const Logo = styled.p`
  margin: 0;
  display: flex;
`;

export const Navigation = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
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

  @media (max-width: 1000px) {
    padding: 12px 14px;
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
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  margin: 0;
`;

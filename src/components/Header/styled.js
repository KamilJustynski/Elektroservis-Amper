import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 28px;
  font-weight: 600;
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
  display: inline-flex;
  padding: 12px 36px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 20px 0px;
  background: ${({ theme }) => theme.colors.endeavour};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.sanMarino};
    transition: 0.3s;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

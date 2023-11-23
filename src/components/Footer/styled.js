import styled, { keyframes } from "styled-components";

const fadeInFromLeft = keyframes`
  from {
    width: 0;
  }
  to {
    width: 50%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.black};
  padding: 83px 80px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 36px;
  font-style: italic;
  font-weight: 400;
  margin: 0;
  padding-bottom: 39px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

export const Option = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  width: fit-content;
  margin: 0;
  cursor: pointer;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.endeavour};
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

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const LogoContainer = styled.div`
  max-width: 100px;
  max-height: 100px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 124px;
`;

export const NumberAndTel = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const Tel = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 36px;
`;

export const Mail = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 36px;
`;

export const Telephone = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.endeavour};
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

export const Email = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.endeavour};
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

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

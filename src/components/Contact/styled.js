import styled, { keyframes } from "styled-components";
import { ReactComponent as handset } from "./handset.svg";
import { ReactComponent as envelope } from "./envelope.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  background-color: ${({ theme }) => theme.colors.solitude};
  padding: 118px 80px;

  @media (max-width: 1200px) {
    gap: 100px;
  }

  @media (max-width: 1000px) {
    padding: 100px 80px;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    padding: 50px 50px;
    gap: 50px;
  }
`;

export const WrapperLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 64px;
  width: 100%;

  @media (max-width: 850px) {
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 48px;
  font-style: italic;
  font-weight: 400;
  margin: 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 10%;
    bottom: -10px;
    width: 108px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    transform: translateX(-50%);
  }

  @media (max-width: 1200px) {
    font-size: 38px;

    &::after {
      content: "";
      position: absolute;
      left: 18%;
      bottom: -10px;
      width: 108px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.black};
      transform: translateX(-50%);
    }
  }
`;

export const NumberAndTel = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 28px;
  flex-direction: column;
  width: 100%;

  @media (max-width: 850px) {
    justify-content: center;
    align-items: center;
    gap: 18px;
  }
`;

export const Tel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 36px;
`;

export const Mail = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 36px;
`;

export const Handset = styled(handset)`
  width: 28px;
  height: 28px;
`;

export const Envelope = styled(envelope)`
  width: 28px;
  height: 22.4px;
`;

const fadeInFromLeft = keyframes`
  from {
    width: 0;
  }
  to {
    width: 50%;
  }
`;

export const Telephone = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  position: relative;

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

  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const Email = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  position: relative;

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

  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 28px;
  max-width: 500px;
`;

export const YourEmail = styled.input`
  width: 500px;
  height: 37px;
  background-color: ${({ theme }) => theme.colors.solitude};
  border: none;
  border-bottom: solid 1px;

  @media (max-width: 1200px) {
    width: 350px;
  }

  @media (max-width: 1000px) {
    width: 300px;
  }

  @media (max-width: 850px) {
    width: 450px;
  }
`;

export const Message = styled.input`
  width: 500px;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.solitude};
  border: 1px solid;

  &::placeholder {
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px;
  }

  @media (max-width: 1200px) {
    width: 350px;
  }

  @media (max-width: 1000px) {
    width: 300px;
  }
  @media (max-width: 850px) {
    width: 450px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 108px;
  height: 60px;
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

  @media (max-width: 1200px) {
    font-size: 20px;
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


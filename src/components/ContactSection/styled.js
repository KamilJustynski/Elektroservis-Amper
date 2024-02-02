import styled from "styled-components";
import { ReactComponent as handset } from "./handset.svg";
import { ReactComponent as envelope } from "./envelope.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  gap: 150px;
  background-color: ${({ theme }) => theme.colors.solitude};
  padding: 118px 200px;

  @media (max-width: 1440px) {
    padding: 100px 100px;
  }

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

  @media (max-width: 540px) {
    padding: 40px 40px;
  }

  @media(max-width: 390px) {
    padding: 40px 25px;
  }
`;

export const WrapperLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (max-width: 850px) {
    gap: 15px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 48px;
  font-style: italic;
  font-weight: 500;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 38px;
  }

  @media (max-width: 540px) {
    font-size: 32px;
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
    gap: 18px;
  }
`;

export const Tel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 36px;

  @media (max-width: 390px) {
    gap: 15px;
  }
`;

export const Mail = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 36px;

  @media (max-width: 390px) {
    gap: 10px;
  }
`;

export const Handset = styled(handset)`
  width: 28px;
  height: 28px;

  @media (max-width: 390px) {
    width: 24px;
    height: 24px;
  }
`;

export const Envelope = styled(envelope)`
  width: 28px;
  height: 22.4px;

  @media (max-width: 390px) {
    width: 24px;
    height: 19.2px;
  }
`;

export const Telephone = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  position: relative;

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

  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const WrapperRight = styled.form`
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
  padding: 10px 10px;
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

  @media (max-width: 600px) {
    width: 350px;
  }

  @media (max-width: 390px) {
    width: 250px;
  }
`;

export const Message = styled.textarea`
  width: 500px;
  height: 140px;
  padding: 10px 10px;
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

  @media (max-width: 600px) {
    width: 350px;
  }

  @media (max-width: 390px) {
    width: 250px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 108px;
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

  @media (max-width: 660px) {
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


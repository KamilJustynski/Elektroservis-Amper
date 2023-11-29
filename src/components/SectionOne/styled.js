import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 199px;
  margin: 140px 100px;

  @media (max-width: 1200px) {
    margin: 100px 80px;
    gap: 100px;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    margin: 50px 80px;
    gap: 70px;
  }

  @media (max-width: 540px) {
    margin: 40px 40px;
  }

  @media (max-width: 390px) {
    margin: 40px 25px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 48px;
  font-weight: 400;
  position: relative;
  display: inline-block;
  font-style: italic;
  width: fit-content;
  margin-top: 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 25%;
    width: 50%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.orange};
    transform: translateX(-50%);
  }

  @media (max-width: 1200px) {
    font-size: 42px;
  }

  @media (max-width: 1200px) {
    font-size: 38px;
  }

  @media (max-width: 1200px) {
    font-size: 32px;
  }
`;

export const Description = styled.article`
  display: inline-block;
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;

  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;

export const Services = styled.button`
  display: inline-block;
  max-width: 239px;
  gap: 36px;
  margin-top: 40px;
  padding: 16px 20px;
  border-radius: 20px 0px;
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 400;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
  font-style: italic;

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
    background-color: ${({ theme }) => theme.colors.burntUmber};
    transition: width 0.5s ease, background 0.3s ease;
    z-index: 0;
  }

  &:hover::before {
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.burntUmber};
  }

  @media (max-width: 1200px) {
    font-size: 16px;
    max-width: 150px;
  }

  @media (max-width: 540px) {
    font-size: 12px;
    padding: 12px 14px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 850px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  border-radius: 0px 20px;
  box-shadow: 7px 7px 26px -9px ${({ theme }) => theme.colors.black};
`;

export const List = styled.ul`
  margin: 5px;
`;

export const ListItem = styled.li``;

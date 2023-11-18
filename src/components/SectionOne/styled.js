import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  row-gap: 199px;
  margin: 140px 100px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 48px;
  font-weight: 600;
  position: relative;
  display: inline-block;
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
`;

export const Description = styled.article`
  display: inline-block;
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
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
  font-weight: 600;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;

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
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 458px;
  border-radius: 0px 20px;
  box-shadow: 7px 7px 26px -9px ${({ theme }) => theme.colors.black};
`;

export const List = styled.ul`
  margin: 5px;
`;

export const ListItem = styled.li``;
 
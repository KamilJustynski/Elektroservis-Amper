import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 154px;
  margin: 0 auto;
  margin-right: 80px;
  margin-left: 80px;
  margin-bottom: 150px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: flex-start;
  grid-gap: 36px;
`;

export const GridItem = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 32px;
  font-weight: 600;
  margin: 0;
`;

export const Description = styled.article`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  height: auto;
  width: 281px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 36px;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 48px;
  font-weight: 600;
  position: relative;
  flex-shrink: 0;

  &::after {
    content: "";
    position: absolute;
    left: 27%;
    bottom: -10px;
    width: 108px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.sunglow};
    transform: translateX(-50%);
  }
`;

export const Article = styled.article`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  line-height: 1.3;
  max-width: 500px;
`;

export const Button = styled.button`
  padding: 16px 20px;
  border-radius: 20px 0px;
  background: ${({ theme }) => theme.colors.sunglow};
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
    background-color: ${({ theme }) => theme.colors.kournikova};
    transition: width 0.5s ease, background 0.3s ease;
    z-index: 0;
  }

  &:hover::before {
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.kournikova};
  }
`;
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background: ${({ theme }) => theme.colors.black};
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 36px;
  font-style: italic;
  font-weight: 400;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

export const Option = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoContainer = styled.div``;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  margin: 0;
`;

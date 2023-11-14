import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  align-items: center;
  row-gap: 199px;
  margin: 140px 80px;
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
`;

export const Description = styled.article`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
`;

export const ServicesAndContact = styled.div`
  display: flex;
  gap: 36px;
  margin-top: 40px;
`;

export const Services = styled.button`
  padding: 16px 20px;
  border-radius: 20px 0px;
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 600;
  border: none;
`;

export const Contact = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 24px;
  font-weight: 600;
  text-decoration-line: underline;
`;

export const ImageWrapper = styled.div``;

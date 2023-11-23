import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 458px;
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  border-radius: 0px 20px;
  box-shadow: -7px 7px 26px -9px ${({ theme }) => theme.colors.black};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 48px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 72px;
  position: relative;
  font-style: italic;

  &::after {
    content: "";
    position: absolute;
    left: 13%;
    bottom: -10px;
    width: 108px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.orange};
    transform: translateX(-50%);
  }
`;

import styled from "styled-components";
import { ReactComponent as ellipse } from "./ellipse.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  background-image: url("https://s3-alpha-sig.figma.com/img/d4cd/ece7/2b9610d9d826a673fec38f8971096293?Expires=1701043200&Signature=ZLyB1IT8fF-L72z5IYAxETN2hynmM0CljMLQDZ6fuQN9CLTTrvGS1UjIF-7NulwSFQ1LlXoYZyxwiXrHoK987QH2G0cOGFSoJtbkJi7omhGkbo-5F26Jgoq-gfWUBOpSCuNkY3yqmA7VM3TprLAXC5ihj4c0GE6lUs6gKVCYzOUvS~k4dMMAG-TWFZ3mIPLPwc6Roqr8kp0NDNf4lkajBpQQYNgHfn90LcXBo6fCiMK3HsNX3iQJaIVvvsj-0VoERIiSAjaoAptztQXHD1doIc3Xli3uabkKWBeLbQqFO8K73dI0EqpX-GTDQgqSBPmL3pph-l4o61YnJgLuWwikPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 624px;
  flex-shrink: 0;
  margin-top: 119px 0 53px 0;
`;

export const MainText = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 64px;
  font-weight: 600;
  margin: 0;
  font-style: italic;

  @media (max-width: 850px) {
    font-size: 48px;
  }

  @media (max-width: 540px) {
    font-size: 38px;
  }
`;

export const SecondText = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 850px) {
    font-size: 16px;
  }

  @media (max-width: 540px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 16px 20px;
  border-radius: 20px 0px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 400;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
  font-style: italic;

  @media (max-width: 850px) {
    font-size: 16px;
  }

  @media (max-width: 540px) {
    font-size: 12px;
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
    background-color: ${({ theme }) => theme.colors.blackNero};
    transition: width 0.5s ease, background 0.3s ease;
    z-index: 0;
  }

  &:hover::before {
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blackNero};
  }
`;

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 30px;
  opacity: 0.5;
`;

export const Ellipse = styled(ellipse)`
  width: 16px;
  height: 16px;
`;

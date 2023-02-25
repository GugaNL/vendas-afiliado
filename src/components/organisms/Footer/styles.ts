import styled from "styled-components";
import Link from "next/link";
import { BreakAt, BreakpointSize } from "../../../styles/Breakpoints";

export const FooterContainer = styled.div`
  grid-area: F;
  background-color: #2a2a2a;
  color: ${(props) => props.theme.colors.lightGray};
  padding: 40px 0;
  left: 0;
  right: 0;

  h6 {
    color: ${(props) => props.theme.colors.white};
    margin-top: 0;
    font-size: 1.25rem;
    letter-spacing: 2px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${BreakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${BreakAt(BreakpointSize.lg)} {
    max-width: 1140px;
    margin: 0 auto; //Em cima e baixo nao tem margem e dos lados assume o automatico e centraliza
  }
`;

export const IconContainer = styled.span`
  margin-right: 8px;
`;

export const FooterLink = styled(Link)`
  color: ${(props) => props.theme.colors.yellow};
  text-decoration: none;
  margin-top: 3px;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.dark};
  }
`;

export const Heading = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin-bottom: 25px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      background-color: #cc0c39;
      height: 5px;
      width: 70px;
    }
  }

  h1 {
    padding-bottom: 20px;
  }
`;

export const ContactContent = styled(Link)`
  width: 60%;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.lightGray};
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    text-decoration: underline;
  }
`;

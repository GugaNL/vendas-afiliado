import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { BreakAt, BreakpointSize } from "../../../styles/Breakpoints";

export const HeaderContainer = styled.div`
  grid-area: H;
  position: fixed;
  padding: 12px;
  float: left;
  width: 100%;
  z-index: 99;
  background-color: #28202e;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentDescription = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContent = styled.div`
  margin: 10px 0;
  overflow: hidden;
  float: left;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
`;

export const LogoImage = styled(Image)``;

export const HeaderDescription = styled.div`
  margin-left: 32px;

  &:before {
    content: "";
    width: 1px;
    height: 27px;
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    left: 150px;
  }

  > span {
    color: rgba(255, 255, 255, 0.5);
    line-height: 26px;
  }
`;

export const FormSearch = styled.form`
  display: flex;
`;

export const SearchButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  padding: 8px 12px;

  &:hover {
    color: #f5f5f5;
  }

  > svg {
    font-size: 20px;
  }
`;

export const SearchFieldInput = styled.input`
  width: 300px;
  background-color: #fff;
  float: left;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #d5d1d8;
  border-right-color: rgb(213, 209, 216);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: none;
  color: #666;
  outline: none;
`;

export const ContactContent = styled.div`
  margin-right: 18px;
  display: flex;
`;

export const ContentText = styled.span`
  font-size: 19px;
  color: ${(props) => props.theme.colors.white};

  transition: all 0.25s ease-in-out;

  &:hover {
    color: #e73931;
  }
`;

export const ContentContactElement = styled.div`
  margin: 0 12px;
`;

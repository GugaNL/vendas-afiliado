import Link from "next/link";
import styled from "styled-components";
import { BreakAt, BreakpointSize } from "../../../styles/Breakpoints";

export const Container = styled.div`
  font-weight: normal;
  font-size: 14px;
  color: #33244a;
  border: 1px solid #d5d1d8;
  padding: 20px 18px;
  box-sizing: border-box;
  margin-bottom: 27px;
  float: left;
  clear: both;
  width: 100%;
  overflow: hidden;

  > h3 {
    text-align: center;
    border-bottom: 1px solid #d5d1d8;
    box-sizing: content-box;
    margin: -7px -20px 20px;
    padding: 0 10px 11px;
    font-weight: 700;
    font-size: 18px;
    color: #28202e;
    text-transform: uppercase;
    line-height: 1.4;
  }
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CategoryListItem = styled.li`
  list-style-type: square;
  margin-left: 17px;
  margin-bottom: 7px;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const CategoryItemLink = styled(Link)`
  font-size: 16px;
  color: ${(props) => props.theme.colors.lightBlack};
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

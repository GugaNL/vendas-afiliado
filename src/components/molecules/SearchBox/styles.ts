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
`;

export const FormSearch = styled.div`
  display: flex;

  > button {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    border: none;
    cursor: pointer;
    transition: all .2s;
    padding: 5px;

    &:hover {
      color: #F5F5F5;
    }
  }
`;

export const SearchFieldInput = styled.input`
  width: 70%;
  background-color: #fff;
  float: left;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #d5d1d8;
  border-right-color: rgb(213, 209, 216);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: none;
  color: #666;
  outline: none;
`;

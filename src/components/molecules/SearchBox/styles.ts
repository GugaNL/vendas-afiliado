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
  margin-bottom: 12px;
  position: relative;
`;

export const SearchFieldInput = styled.input`
  width: 100%;
  padding-right: 20px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #d5d1d8;
  border-right-color: rgb(213, 209, 216);
  border-right-style: solid;
  border-right-width: 1px;
  outline: none;
  color: #666;
  background-color: #fff;
`;

export const SearchBtn = styled.button`
  background-color: #cc0c39;
  color: ${(props) => props.theme.colors.white};
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  padding: 8px;
  border-radius: 3px;

  &:hover {
    color: #f5f5f5;
  }
`;

export const SearchTermText = styled.span`
  margin-left: 5px;
`;

export const ClearSearchContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
`;

export const ClearSearchBtn = styled.button`
  margin-left: 8px;
  margin-top: 3px;
  border: none;
  background: none;

  > svg {
    color: #cc0c39;
    font-size: 18px;
  }
`;

export const ClearFieldSearchBtn = styled.button`
  position: absolute;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  line-height: 16px;
  font-size: 12px;
  border-radius: 50%;
  top: 8px;
  bottom: 0;
  right: 5px;
  background: #ddd;
  padding: 0;
  outline: none;
  cursor: pointer;
  transition: 0.1s;

  > svg {
    font-size: 16px;
  }
`;

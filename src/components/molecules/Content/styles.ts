import styled from "styled-components";
import { BreakAt } from "../../../styles/Breakpoints";

export const Container = styled.div`
  grid-area: CT;
  padding: 0;
  height: calc(100vh - 70px); //Altura da tela inteira menos a altura do header
  margin-top: 60px;

  ${BreakAt(600)} {
    margin-top: 0;
    padding: 25px;
  }

  //overflow-y: scroll; //O que não couber vai gerar o scroll

  /* ::-webkit-scrollbar{
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: {props => props.theme.colors.silver};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: {props => props.theme.colors.gray};
  } */
`;

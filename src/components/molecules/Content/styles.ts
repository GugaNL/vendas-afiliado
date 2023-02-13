import styled from "styled-components";
import { BreakAt } from "../../../styles/Breakpoints";

export const ContentContainer = styled.div`
  grid-area: CT;
  padding: 0;
  margin-top: 50px;
  z-index: 0;
  position: relative;
  //height: calc(100vh - 70px); //Altura da tela inteira menos a altura do header
  //width: fit-content;

  ${BreakAt(600)} {
    margin-top: 0;
    padding: 25px;
  }
`;

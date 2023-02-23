import styled from "styled-components";
import { BreakAt, BreakpointSize } from "../../../styles/Breakpoints";

type GridProps = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export const Grid = styled.div.attrs((props: GridProps) => ({
  sm: props.sm,
  md: props.md,
  lg: props.lg,
  xl: props.xl,
}))<GridProps>`
  display: grid;
  grid-column-gap: 16px; //Espaçamento entre as colunas
  grid-row-gap: 16px; //Espaçamento entre as linhas
  grid-template-columns: 1fr;
  margin-top: 40px;

  ${BreakAt(400)} {
    grid-template-columns: repeat(${(props) => props.sm}, 1fr);
  }

  ${BreakAt(BreakpointSize.sm)} {
    grid-template-columns: repeat(${(props) => props.sm}, 1fr);
  }

  ${BreakAt(BreakpointSize.md)} {
    grid-template-columns: repeat(${(props) => props.md}, 1fr);
  }

  ${BreakAt(BreakpointSize.lg)} {
    grid-template-columns: repeat(${(props) => props.lg}, 1fr);
  }

  ${BreakAt(BreakpointSize.xl)} {
    grid-template-columns: repeat(${(props) => props.xl}, 1fr);
  }
`;

export default Grid;

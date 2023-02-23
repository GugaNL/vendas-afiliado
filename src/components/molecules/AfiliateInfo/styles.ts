import styled from "styled-components";
import { BreakAt } from "../../../styles/Breakpoints";

export const AfiliateInfoContainer = styled.div`
  grid-area: AI;
  margin-top: 35px;
  font-size: 12px;
  text-align: center;
  padding: 0 50px;

  ${BreakAt(600)} {
    margin-top: 22px;
    font-size: 14px;
  }

  > h3 {
    color: ${(props) => props.theme.colors.gray};
  }
`;

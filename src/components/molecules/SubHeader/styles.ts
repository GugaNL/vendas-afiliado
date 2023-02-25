import styled from "styled-components";
import { BreakAt } from "../../../styles/Breakpoints";

export const SubHeaderContainer = styled.div`
  grid-area: AI;
  margin-top: 65px;
  font-size: 12px;
  text-align: center;
  padding: 0 50px;

  ${BreakAt(600)} {
    //margin-top: 45px;
    font-size: 14px;
  }

  > h2 {
    color: #cc0c39;
  }

  > h3 {
    margin-top: 12px;
    color: ${(props) => props.theme.colors.gray};
  }
`;

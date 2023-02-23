import Link from "next/link";
import styled from "styled-components";
import { BreakAt, BreakpointSize } from "../../../styles/Breakpoints";

export const BreadcrumbContainer = styled.div`
  background: ${(props) => props.theme.colors.lightSilver};
  padding: 8px;
  border-radius: 3px;
`;

export const ListItems = styled.ul`
  display: flex;
  list-style: none;

  > svg {
    font-size: 18px;
    margin-top: 1px;
  }
`;

export const Item = styled.li``;

export const ItemLinkRoot = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;
  margin-right: 6px;
`;

export const ItemLinkCurrent = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.lightBlack};
  cursor: inherit;
  margin-left: 6px;
`;

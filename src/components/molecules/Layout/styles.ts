import styled from "styled-components";
import ReactPaginate from "react-paginate";

/**
 * Layout
 * H - Header
 * AS - Aside
 * CT - Content
 */

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;
  grid-template-areas: "H H" "AS CT" "F F";
  height: 100vh;
  width: fit-content;

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;
    grid-template-areas: "H" "CT" "F";
  }
`;


export const PaginationLib = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  list-style: none;

  > li {
    padding: 12px;
    font-size: 18px;
  }

  > li > a {
    cursor: pointer;
    color: ${(props) => props.theme.colors.gray};
  }

  > h1 {
    color: #6c7ac9;
  }

  .pagination > a {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #6c7ac9;
    color: #6c7ac9;
  }

  .pagination__link {
    font-weight: bold;
    color: ${(props) => props.theme.colors.gray};
  }

  .pagination__link--active a {
    color: ${(props) => props.theme.colors.white};
    background: #cc0c39;
    padding: 5px 9px;
    border-radius: 5px;
  }

  .pagination__link--disabled a {
    color: ${(props) => props.theme.colors.gray};
    opacity: 0.5;
    cursor: auto;
  }
`;
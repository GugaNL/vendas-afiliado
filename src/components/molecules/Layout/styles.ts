import styled from "styled-components";

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

import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { BreakAt, BreakpointSize } from "../../../styles/Breakpoints";
import React from "react";
import { Breackpoints } from "../../../interfaces";

type CarouselLibProps = {
  breakPoints: Array<Breackpoints>;
  children: Array<React.ReactElement>;
};

export const Container = styled.div`
  grid-area: CA;
  margin: 24px 12px;
  padding: 20px;
  width: calc(100vw - 300px);

  > h1 {
    font-size: 35px;
    color: rgb(120, 117, 117);
    text-align: center;
  }
`;

export const ContWrapper = styled.div`
  width: 100%;

  > h1 {
    font-size: 26px;
  }
`;

export const CarouselLib = styled(Carousel).attrs(
  (props: CarouselLibProps) => ({
    breakPoints: props.breakPoints,
    children: props.children,
  })
)`
  > div > button {
    background-color: transparent;
    box-shadow: none;
  }

  > div > div > div {
    width: 100% !important;
  }
`;

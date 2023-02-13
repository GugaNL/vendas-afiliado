import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { BreakAt, BreakpointSize } from "../../../styles/Breakpoints";
import React from "react";
import { Breackpoints } from "../../../interfaces";

type CarouselLibProps = {
  breakPoints: Array<Breackpoints>;
  children: Array<React.ReactElement>;
};

export const CarouselContainer = styled.div`
  grid-area: CA;
  margin: 24px 12px;
  width: calc(100vw);

  > h1 {
    font-size: 35px;
    color: rgb(120, 117, 117);
    text-align: center;
  }

  ${BreakAt(940)} {
    width: calc(100vw - 50px);
  }

  ${BreakAt(1040)} {
    width: calc(100vw - 150px);
  }

  ${BreakAt(1140)} {
    width: calc(100vw - 250px);
  }

  ${BreakAt(1240)} {
    width: calc(100vw - 350px);
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
  margin-top: 24px;

  > div > button {
    background-color: transparent;
    box-shadow: none;
    display: none;

    &:hover {
      background-color: inherit !important;
      color: inherit !important;
      box-shadow: inherit !important;
    }

    &:focus {
      background-color: inherit !important;
      color: inherit !important;
      box-shadow: inherit !important;
    }

    ${BreakAt(370)} {
      display: block;
    }
  }

  > div > div {
    margin: 0;

    ${BreakAt(370)} {
      margin: 0 10px;
    }
  }

  > div > div > div {
    width: 100% !important;
  }
`;

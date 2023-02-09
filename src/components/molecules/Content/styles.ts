import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  padding: 25px;

  height: calc(100vh - 70px); //Altura da tela inteira menos a altura do header
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

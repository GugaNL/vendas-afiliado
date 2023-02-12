import styled, { css } from "styled-components";

type ContainerProps = {
  menuIsOpen: boolean;
}

export const AsideContainer = styled.div.attrs((props: ContainerProps) => ({
  menuIsOpen: props.menuIsOpen
}))<ContainerProps>`
  grid-area: AS;
  background-color: transparent;
  padding-left: 20px;
  position: relative;

  @media (max-width: 600px) {
    padding: 0 7px;
    position: fixed;
    z-index: 100;

    height: ${(props) => (props.menuIsOpen ? "100vh" : "70px")};
    overflow: hidden; //esconde o que está dentro do container, senão iria exibi-los
    ${(props) =>
      !props.menuIsOpen &&
      css`
        border: none;
      `}
  }

  @media (max-width: 380px) {
    padding-right: 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const Logo = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;
`;

export const MenuContainer = styled.nav`
  margin-top: 50px;
  background: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  transition: opacity 0.3s;
  margin: 8px 0;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;

export const ToogleMenu = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 22px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  display: none;
  margin-top: 16px;
  border: none;


  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MenuItemButton = styled.button`
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  border: none;
  background: none;
  margin: 7px 0;
  display: flex;
  align-items: center;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;

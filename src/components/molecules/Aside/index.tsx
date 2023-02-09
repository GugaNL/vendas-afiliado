import React, { useState } from "react";
import {
  Container,
  Header,
  Logo,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  ToogleMenu,
} from "./styles";
//import logo from "../../assets/logo.svg";
//import { menuItems } from "../../utils";
import {
  FaStaylinked,
  FaWpforms,
  FaAddressBook,
  FaRegLifeRing,
} from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";

const Aside = ({ children }: any) => {
  const [showToggleMenu, setShowToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowToggleMenu(!showToggleMenu);
  };

  // const renderIcon = (itemIcon: any) => {
  //   if (itemIcon === "FaStaylinked") {
  //     return <FaStaylinked />;
  //   } else if (itemIcon === "FaWpforms") {
  //     return <FaWpforms />;
  //   } else if (itemIcon === "FaAddressBook") {
  //     return <FaAddressBook />;
  //   }
  //   return <FaRegLifeRing />;
  // };

  return (
    <Container menuIsOpen={showToggleMenu}>
      <Header>
        <ToogleMenu onClick={() => handleToggleMenu()}>
          {showToggleMenu ? <MdClose /> : <MdMenu />}
        </ToogleMenu>
        {/* <Logo src={logo} alt="Logo sorteio" /> */}
        {/* <Title>Sorteios</Title> */}
      </Header>
      <MenuContainer>
        {children}
      </MenuContainer>
    </Container>
  );
};

export default Aside;

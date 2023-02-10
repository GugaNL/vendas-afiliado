import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  ContactContent,
  ContentDescription,
  FormSearch,
  HeaderContainer,
  HeaderDescription,
  LogoContent,
  LogoImage,
  HeaderLink,
  SearchButton,
  SearchFieldInput,
  ContentText,
  ContentContactElement,
} from "./styles";
import logo from "../../../assets/imgs/cupomlogo.png";

export const Header = () => {
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <HeaderContainer>
      <ContentDescription>
        <LogoContent>
          <HeaderLink href="#">
            <LogoImage src={logo} alt="" />
          </HeaderLink>
        </LogoContent>
        <HeaderDescription>
          <span>Ofertas imperdíveis</span>
        </HeaderDescription>
      </ContentDescription>

      <div>
        <FormSearch>
          <SearchFieldInput
            type="search"
            placeholder="Pesquisar"
            name="search-input"
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
          />
          <SearchButton type="submit">
            <FaSearch />
          </SearchButton>
        </FormSearch>
      </div>

      <ContactContent>
        <ContentContactElement>
          <HeaderLink href="">
            <ContentText>Início</ContentText>
          </HeaderLink>
        </ContentContactElement>
        <ContentContactElement>
          <HeaderLink href="">
            <ContentText>Contato</ContentText>
          </HeaderLink>
        </ContentContactElement>
      </ContactContent>
    </HeaderContainer>
  );
};

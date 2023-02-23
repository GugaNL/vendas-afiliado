import {
  ContactContent,
  ContentDescription,
  HeaderContainer,
  HeaderDescription,
  LogoContent,
  LogoImage,
  HeaderLink,
  ContentText,
  ContentContactElement,
} from "./styles";
import logo from "../../../assets/imgs/logo.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <ContentDescription>
        <LogoContent>
          <HeaderLink href="/">
            <LogoImage src={logo} alt="" />
          </HeaderLink>
        </LogoContent>
        <HeaderDescription>
          <span>Ofertas imperdíveis</span>
        </HeaderDescription>
      </ContentDescription>
      <ContactContent>
        <ContentContactElement>
          <HeaderLink href="/">
            <ContentText>Início</ContentText>
          </HeaderLink>
        </ContentContactElement>
        <ContentContactElement>
          <HeaderLink href="mailto:promomaniadigital@gmail.com">
            <ContentText>Contato</ContentText>
          </HeaderLink>
        </ContentContactElement>
      </ContactContent>
    </HeaderContainer>
  );
};

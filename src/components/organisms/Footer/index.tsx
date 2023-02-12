import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Grid } from "../../atoms/Grid";
import {
  FooterContainer,
  ContactContent,
  Container,
  FooterLink,
  Heading,
  IconContainer,
} from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid md={3}>
          <div>
            <Heading>
              <h6>Promomania</h6>
            </Heading>
            <p>
              Nosso conteúdo é atualizado constantemente, não fique de fora. O
              lugar certo de poupar é aqui.
            </p>
          </div>
          <div>
            <Heading>
              <h6>Contato</h6>
            </Heading>
            <ContactContent href="">
              <IconContainer>
                <MdOutlineMail />
              </IconContainer>
              promomaniadigital@gmail.com
            </ContactContent>
          </div>
          <div>
            <Heading>
              <h6>Redes sociais</h6>
            </Heading>
            <p>
              <FooterLink target="_blank" href="#">
                <IconContainer>
                  <FaFacebookF />
                </IconContainer>
                Facebook
              </FooterLink>
            </p>
            <p>
              <FooterLink target="_blank" href="#">
                <IconContainer>
                  <FaInstagram />
                </IconContainer>
                Instagram
              </FooterLink>
            </p>
          </div>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

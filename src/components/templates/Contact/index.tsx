import { useState } from "react";
import { Header } from "../../organisms/Header";
import { Footer } from "../../organisms/Footer";
import {
  ContactContainer,
  ContactRoot,
  ContentInput,
  MessageInput,
  NameInput,
  SendButton,
} from "./styles";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      <ContactRoot>
        <h1>Envie-nos sua mensagem para qualquer tipo de informação</h1>
        <ContactContainer>
          <ContentInput>
            <label>Seu nome</label>
            <NameInput
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />
          </ContentInput>

          <ContentInput>
            <label>Seu email</label>
            <NameInput
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
            />
          </ContentInput>

          <ContentInput>
            <label>Mensagem</label>
            <MessageInput
              value={message}
              rows={4}
              onChange={(evt) => setMessage(evt.target.value)}
            />
          </ContentInput>
          <SendButton>
            <span>Enviar</span>
          </SendButton>
        </ContactContainer>
        <Footer />
      </ContactRoot>
    </>
  );
};

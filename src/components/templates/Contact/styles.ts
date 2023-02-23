import styled from "styled-components";
import { BreakAt } from "../../../styles/Breakpoints";


export const ContactRoot = styled.div`
  padding-top: 120px;
  > h1 {
    color: #2e3d62;
    text-align: center;
  }
`;

export const ContactContainer = styled.div`
  background: ${(props) => props.theme.colors.silver};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 50px;
  border-radius: 10px;
`;

export const ContentInput = styled.div`
  margin: 12px 0;
  display: flex;
  flex-direction: column;

  > label {
    font-size: 18px;
    color: #2e3d62;
  }
`;

export const NameInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  margin-top: 3px;
  border: none;
  outline: none;
`;

export const MessageInput = styled.textarea`
  padding: 8px;
  border-radius: 5px;
  margin-top: 3px;
  border: none;
  outline: none;
`;

export const SendButton = styled.button`
  background: ${(props) => props.theme.colors.lightBlack};
  padding: 8px;
  border: none;
  border-radius: 5px;
  width: 100px;
  margin-top: 32px;
  align-self: center;
  transition: all 0.2s;

  &:hover {
    background: #cc0c39;
  }

  > span {
    color: ${(props) => props.theme.colors.white};
  }

  ${BreakAt(320)} {
    width: 200px;
  }
`;

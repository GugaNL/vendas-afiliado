import React from "react";
import {Container} from './styles';

const Content = ({ children }: any) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Content;
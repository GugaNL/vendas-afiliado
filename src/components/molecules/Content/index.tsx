import React from "react";
import {ContentContainer} from './styles';

const Content = ({ children }: any) => {
    return (
        <ContentContainer>
            {children}
        </ContentContainer>
    )
}

export default Content;
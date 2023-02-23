import { EmptyResultContainer } from "./styles"

type EmptyResultProps = {
    children: React.ReactElement
}

export const EmptyResult = ({ children }: EmptyResultProps) => {
    return (
        <EmptyResultContainer>
            {children}
        </EmptyResultContainer>
    )
}
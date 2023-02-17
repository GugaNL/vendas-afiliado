import { useState } from "react";
import { Container, FormSearch, SearchFieldInput } from "./styles";

export const SearchBox = ({ getProductsByTitle }: any) => {
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <Container>
      <FormSearch>
        <SearchFieldInput
          type="search"
          placeholder="Pesquisar"
          name="search-input"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <button onClick={() => getProductsByTitle(searchTerm)}>
          Pesquisar
        </button>
      </FormSearch>
    </Container>
  );
};

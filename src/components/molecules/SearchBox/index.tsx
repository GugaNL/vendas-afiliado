import { useState } from "react";
import { Container, FormSearch, SearchFieldInput } from "./styles";

export const SearchBox = () => {
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <Container>
      <FormSearch>
        <SearchFieldInput
          type="search"
          placeholder="Pesquisar"
          name="search-input"
          value={searchTerm}
          onChange={() => {}}
        />
        <button type="submit">Pesquisar</button>
      </FormSearch>
    </Container>
  );
};

import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import {
  ClearSearchBtn,
  ClearSearchContent,
  Container,
  FormSearch,
  SearchFieldInput,
  SearchTermText,
  SearchBtn,
  ClearFieldSearchBtn,
} from "./styles";

export const SearchBox = ({ getProducts, getProductsByTitle }: any) => {
  const [searchTerm, setsearchTerm] = useState("");
  const [searchedTerm, setSearchedTerm] = useState("");
  const [isVisibleClearBtn, setIsVisibleClearBtn] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setIsVisibleClearBtn(true);
    } else {
      setIsVisibleClearBtn(false);
    }
  }, [searchTerm]);

  const search = () => {
    setSearchedTerm(searchTerm);
    getProductsByTitle(searchTerm);
  };

  const finalClearSearch = () => {
    setsearchTerm("");
    setSearchedTerm("");
    getProducts();
  }

  return (
    <Container>
      <FormSearch>
        <SearchFieldInput
          placeholder="Pesquisar"
          name="search-input"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        {isVisibleClearBtn && (
          <ClearFieldSearchBtn onClick={() => finalClearSearch()}>
            <GrFormClose />
          </ClearFieldSearchBtn>
        )}
      </FormSearch>
      <SearchBtn onClick={() => search()}>Pesquisar</SearchBtn>

      {searchedTerm && (
        <ClearSearchContent>
          <SearchTermText>
            Resultados para <b>{searchedTerm}</b>
          </SearchTermText>
          <ClearSearchBtn onClick={() => finalClearSearch()}>
            <FaWindowClose />
          </ClearSearchBtn>
        </ClearSearchContent>
      )}
    </Container>
  );
};

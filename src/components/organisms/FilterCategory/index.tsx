import {
  CategoryList,
  CategoryListItem,
  Container,
  CategoryItemLink,
} from "./styles";

//mock
import { categories } from "../../../mocks";

export const FilterCategory = () => {
  return (
    <Container>
      <h3>Categorias</h3>
      <CategoryList>
        {categories &&
          categories.length &&
          categories.map((item: any, index: number) => (
            <CategoryListItem key={index}>
              <CategoryItemLink href="#">{item?.name}</CategoryItemLink>
            </CategoryListItem>
          ))}
      </CategoryList>
    </Container>
  );
};

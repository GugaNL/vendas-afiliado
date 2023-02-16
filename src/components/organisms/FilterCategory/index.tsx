import { ICategory } from "@/interfaces";
import {
  CategoryList,
  CategoryListItem,
  Container,
  CategoryItemLink,
} from "./styles";

type FilterCategoryProps = {
  categories: Array<ICategory>
}

export const FilterCategory = ({ categories }: FilterCategoryProps) => {
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

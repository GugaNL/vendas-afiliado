import { ICategory } from "@/interfaces";
import {
  CategoryList,
  CategoryListItem,
  Container,
  CategoryItemLink,
} from "./styles";

type FilterCategoryProps = {
  categories: Array<ICategory>,
  getProductsByCategory: any
}

export const FilterCategory = ({ categories, getProductsByCategory }: FilterCategoryProps) => {

  const search = (categorySelected: any) => {
    getProductsByCategory(categorySelected);
  };

  return (
    <Container>
      <h3>Categorias</h3>
      <CategoryList>
        {categories &&
          categories.length &&
          categories.map((item: any, index: number) => (
            <CategoryListItem key={index}>
              <CategoryItemLink href="javascript:void(0)" onClick={() => search(item)}>{item?.name}</CategoryItemLink>
            </CategoryListItem>
          ))}
      </CategoryList>
    </Container>
  );
};

import { MdKeyboardArrowRight } from "react-icons/md";
import { BreadcrumbContainer, Item, ItemLinkRoot, ItemLinkCurrent, ListItems } from "./style";

type BreadcrumbProps = {
  currentCategory: string,
  clearActivePageAndFetch: any
};

export const Breadcrumb = ({ currentCategory = "", clearActivePageAndFetch }: BreadcrumbProps) => {
  return (
    <BreadcrumbContainer>
      <ListItems>
        <Item>
          <ItemLinkRoot href="javascript:void(0)" onClick={() => clearActivePageAndFetch()}>Pagina inicial</ItemLinkRoot>
        </Item>
        {currentCategory && (
          <>
            <MdKeyboardArrowRight />
            <Item>
              <ItemLinkCurrent href="javascript:void(0)">{currentCategory}</ItemLinkCurrent>
            </Item>
          </>
        )}
      </ListItems>
    </BreadcrumbContainer>
  );
};

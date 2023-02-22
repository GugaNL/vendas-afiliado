import React, { useEffect, useState, useCallback } from "react";
import { LayoutContainer, PaginationLib } from "./styles";
//Components
import Aside from "../Aside";
import Content from "../Content";
import { SearchBox } from "../../molecules/SearchBox";
import { FilterCategory } from "../../organisms/FilterCategory";
import { Grid } from "../../atoms/Grid";
import { ProductBox } from "../../atoms/ProductBox";
import { Header } from "../../organisms/Header";
import { Carousel } from "../Carousel";
import { Footer } from "../../organisms/Footer";
//Services APIs
import {
  listProducts,
  listProductsIframe,
  listProductsByTitle,
  listProductsByCategory,
} from "../../../pages/api/productAPI";
import { listCategories } from "../../../pages/api/categorytAPI";

const Layout = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredTerm, setFilteredTerm] = useState("");
  const [iframeProducts, setIframeProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [page, setPage] = useState(0);

  const limit = 12;
  const pageCount = Math.ceil(totalProducts / limit);

  const getCategories = useCallback(async () => {
    const response = await listCategories();
    if (response && response.success) {
      const { categories = [] } = response;
      setCategories(categories);
    } else {
    }
  }, []);

  const getProducts = useCallback(async (page = 1, limit = 5) => {
    //setLoading(true);
    if (filteredTerm) {
      setFilteredTerm("");
    }
    const responseProducts = await listProducts(page, limit);

    if (responseProducts && responseProducts.success) {
      //setLoading(false);
      const { products: { rows = [], count = 0 } = {} } = responseProducts;
      setProducts(rows);
      setTotalProducts(count);

      const idsToExclude = rows.map((item: any) => {
        return item.id;
      });

      getIframeProducts(1, 10, idsToExclude);
    } else {
      //setLoading(false);
    }
  }, []);

  const getProductsByTitle = useCallback(
    async (page = 1, limit = 5, title: string) => {
      setFilteredTerm(title);
      const response = await listProductsByTitle(page, limit, title);
      if (response && response.success) {
        const { products: { rows = [], count = 0 } = {} } = response;
        setProducts(rows);
        setTotalProducts(count);

        const idsToExclude = rows.map((item: any) => {
          return item.id;
        });

        getIframeProducts(1, 10, idsToExclude);
      } else {
        //error msg
      }
    },
    []
  );

  const getIframeProducts = useCallback(
    async (page = 1, limit = 5, idsToExclude = []) => {
      const response = await listProductsIframe(page, limit, idsToExclude);

      if (response && response.success) {
        const { products = [] } = response;
        setIframeProducts(products);
      } else {
        //error msg
      }
    },
    []
  );

  useEffect(() => {
    getCategories();
    getProducts(1, limit);
  }, []);

  function handlePageClick({ selected: selectedPage }: any) {
    setPage(selectedPage);
    if (!filteredTerm) {
      getProducts(selectedPage + 1, limit);
    } else {
      getProductsByTitle(selectedPage + 1, limit, filteredTerm);
    }
    window.scrollTo(0, 0);
  }

  const clearActivePageAndFetch = (title = "", isFiltered = false) => {
    setPage(0);

    if (isFiltered) {
      getProductsByTitle(1, limit, title);
    } else {
      setFilteredTerm("");
      getProducts(1, limit);
    }
  };

  const clearActivePageAndFetchByCategory = (categoryId: number) => {
    setPage(0);
    listProductsByCategory(1, limit, categoryId);
  };

  return (
    <LayoutContainer>
      <Header />
      <Aside>
        <SearchBox
          getProductsByTitle={(title: string) =>
            clearActivePageAndFetch(title, true)
          }
          getProducts={() => clearActivePageAndFetch("", false)}
        />
        {categories && categories.length > 0 && (
          <FilterCategory
            categories={categories}
            getProductsByCategory={(categoryId: number) =>
              clearActivePageAndFetchByCategory(categoryId)
            }
          />
        )}
      </Aside>
      <Content>
        <Grid sm={2} md={2} lg={3} xl={4}>
          {products &&
            products.length > 0 &&
            products.map((item, index) => (
              <ProductBox key={index} productItem={item} />
            ))}
        </Grid>
        <PaginationLib
          breakLabel="..."
          pageRangeDisplayed={5}
          previousLabel={"← Anterior"}
          nextLabel={"Próximo →"}
          pageCount={pageCount}
          forcePage={page}
          onPageChange={handlePageClick}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
        {iframeProducts && iframeProducts.length > 0 && (
          <Carousel
            title="Ofertas em destaque"
            iframeProducts={iframeProducts}
          />
        )}
      </Content>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

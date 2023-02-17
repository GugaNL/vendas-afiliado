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
import { listProducts } from "../../../pages/api/productAPI";
import { listCategories } from "../../../pages/api/categorytAPI";

//Mock
import { productsIframeList } from "../../../mocks";

const Layout = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  const limit = 5;
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
    const response = await listProducts(page, limit);

    if (response && response.success) {
      //setLoading(false);
      const { products: { rows = [], count = 0 } = {} } = response;
      setProducts(rows);
      setTotalProducts(count);
    } else {
      //setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  function handlePageClick({ selected: selectedPage }: any) {
    getProducts(selectedPage + 1, limit);
    window.scrollTo(0, 0);
  }

  return (
    <LayoutContainer>
      <Header />
      <Aside>
        <SearchBox />
        {categories && categories.length > 0 && (
          <FilterCategory categories={categories} />
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
          onPageChange={handlePageClick}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
        {productsIframeList && productsIframeList.length > 0 && (
          <Carousel title="Ofertas em Reserva" products={productsIframeList} />
        )}
      </Content>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

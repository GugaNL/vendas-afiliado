import React, { useEffect, useState, useCallback } from "react";
import { LayoutContainer } from "./styles";
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
import { productsIframeList, productsVitrineList } from "../../../mocks";

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

  
  const getProducts = async (page = 1, limit = 5) => {
    //setLoading(true);
    const response = await listProducts(page, limit);
    const { data: responseListProducts = {} } = response;

    if (responseListProducts && responseListProducts.success) {
      //setLoading(false);
      const { products: { rows = [], count = 0 } = {} } = responseListProducts;
      setProducts(rows);
      setTotalProducts(count);
    } else {
      //setLoading(false);
      // toast.error("Falha ao listar produtos", {
      //   position: "top-right",
      //   autoClose: 2000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: false,
      //   progress: undefined,
      // });
    }
  };


  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

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
          {productsVitrineList &&
            productsVitrineList.length &&
            productsVitrineList.map((item, index) => (
              <ProductBox key={index} productItem={item} />
            ))}
        </Grid>
        {productsIframeList && productsIframeList.length > 0 && (
          <Carousel title="Ofertas em Reserva" products={productsIframeList} />
        )}
      </Content>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

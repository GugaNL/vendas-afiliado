import React from "react";
import { Container } from "./styles";
//Components
import Aside from "../Aside";
import Content from "../Content";
import { SearchBox } from "../../molecules/SearchBox";
import { FilterCategory } from "../../organisms/FilterCategory";
import { Grid } from "../../atoms/Grid";
import { ProductBox } from "../../atoms/ProductBox";
import { Header } from "../../organisms/Header";
import { Carousel } from "../Carousel";

//Mock
import { productsIframeList, productsVitrineList } from "../../../mocks";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Aside>
        <SearchBox />
        <FilterCategory />
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
    </Container>
  );
};

export default Layout;

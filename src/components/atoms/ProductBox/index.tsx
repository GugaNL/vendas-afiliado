import { IProduct } from "@/interfaces";
import Link from "next/link";
import {
  ProductBoxContainer,
  ContainerDiscount,
  ContentDiscount,
  ContentDiscountInfo,
  ContentImage,
  ContentImageCover,
  ContentPrices,
  DiscountText,
  Footer,
  NewPrice,
  OldPrice,
  ProductContentInfo,
  ProductImage,
  ProductLinkTitle,
  ProductTitle,
} from "./styles";

export const ProductBox = ({ productItem }: any) => {
  return (
    <ProductBoxContainer>
      <ContentImage>
        <Link href={productItem?.linkAfiliate}>
          <ContentImageCover />
          {/* <ProductImage src={"http://localhost:5000/api/" + productItem?.imagePath} alt="" /> */}
        </Link>
      </ContentImage>
      <ProductContentInfo>
        <ProductLinkTitle href={productItem?.linkAfiliate}>
          <ProductTitle>{productItem?.title}</ProductTitle>
        </ProductLinkTitle>

        {productItem?.discount !== 0 && (
          <ContainerDiscount>
            <ContentDiscount>
              <DiscountText>{productItem?.discount}% off</DiscountText>
            </ContentDiscount>
            <ContentDiscountInfo>
              <span>Oferta do dia</span>
            </ContentDiscountInfo>
          </ContainerDiscount>
        )}

        <ContentPrices>
          {productItem?.newPrice !== "0.00" ? (
            <>
              <NewPrice>R$ {productItem?.newPrice}</NewPrice>
              <OldPrice>R$ {productItem?.oldPrice}</OldPrice>
            </>
          ) : (
            <NewPrice>R$ {productItem?.oldPrice}</NewPrice>
          )}
        </ContentPrices>
        <Footer>
          <span>
            <b>{productItem?.obs1}</b>
          </span>{" "}
          <span>{productItem?.obs2}</span>
        </Footer>
      </ProductContentInfo>
    </ProductBoxContainer>
  );
};

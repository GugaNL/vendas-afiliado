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
  ImageProductUrl,
  ImageProductUrlSec,
} from "./styles";

export const ProductBox = ({ productItem }: any) => {
  return (
    <ProductBoxContainer>
      {productItem?.imgUrlTag1 &&
        productItem?.imgUrlTag2 &&
        productItem?.imgUrlTag3 && (
          <ContentImage>
            <Link href={productItem?.imgUrlTag1} target="_blank">
              <ContentImageCover />
              <ImageProductUrl src={productItem?.imgUrlTag2} alt="" />
            </Link>
            <ImageProductUrlSec
              src={productItem?.imgUrlTag3}
              width="1"
              height="1"
              alt=""
            />
          </ContentImage>
        )}

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

        {productItem?.oldPrice !== "0.00" && (
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
        )}

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

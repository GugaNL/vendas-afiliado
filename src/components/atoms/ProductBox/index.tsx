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
        <Link href={productItem?.externalLink}>
          <ContentImageCover />
          <ProductImage src={productItem?.imageSrc} alt="" />
        </Link>
      </ContentImage>
      <ProductContentInfo>
        <ProductLinkTitle href={productItem?.externalLink}>
          <ProductTitle>{productItem?.title}</ProductTitle>
        </ProductLinkTitle>
        <ContainerDiscount>
          <ContentDiscount>
            <DiscountText>{productItem?.discount}% off</DiscountText>
          </ContentDiscount>
          <ContentDiscountInfo>
            <span>Oferta do dia</span>
          </ContentDiscountInfo>
        </ContainerDiscount>
        <ContentPrices>
          <NewPrice>R$ {productItem?.newPrice}</NewPrice>
          <OldPrice>R$ {productItem?.oldPrice}</OldPrice>
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

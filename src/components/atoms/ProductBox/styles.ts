import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const ProductBoxContainer = styled.div``;

export const ContentImage = styled.div`
  margin-bottom: 4px !important;
  width: 100%;
  min-height: 160px;
  position: relative;
  display: flex;
  justify-content: center;
  transition: all ease 0.35s;
  transform: scale(0.9);

  &:hover {
    transform: scale(1);
  }
`;

export const ContentImageCover = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 100;
  background-image: radial-gradient(
    0% 100%,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.03) 100%
  );
`;

export const ProductLinkTitle = styled(Link)`
  text-decoration: none;
`;

export const ProductImage = styled(Image)`
  width: 212px;
  height: 299px;
`;

export const ProductContentInfo = styled.div`
  text-align: center;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductContentTitle = styled.div``;

export const ProductTitle = styled.span`
  font-size: 15px;
  line-height: 20px;
  color: #0f1111;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ContainerDiscount = styled.div`
  align-items: center;
  display: inline-flex;
  margin-top: 8px;
  gap: 6px;
`;

export const ContentDiscount = styled.div`
  background: #cc0c39;
  color: #fff;
  border-radius: 2px;
  padding: 6px 6px;
  white-space: nowrap;
  font-weight: 700;
`;

export const DiscountText = styled.span`
  font-size: 12px;
`;

export const ContentDiscountInfo = styled.div`
  color: #cc0c39;
  background: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: 700;

  > span {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const ContentPrices = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;

  > span {
    font-weight: 700;
  }
`;

export const NewPrice = styled.span`
  font-size: 21px;
  color: #0f1111;
`;

export const OldPrice = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #565959;
  text-decoration: line-through;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: #565959;
    font-size: 13px;
    line-height: 16px;
  }

  &:last-child {
    font-size: 12px !important;
  }
`;

export const ImageProductUrl = styled.img`
  //border: 0;
  max-width: 225px;
  max-height: 160px;
`;

export const ImageProductUrlSec = styled(Image)`
  border: 0;
  border: none;
  margin: 0;
`;

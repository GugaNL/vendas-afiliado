import { useRef } from "react";
import { ItemObject } from "react-elastic-carousel";
import { CarouselLib, CarouselContainer, ContWrapper } from "./styles";
import { BreakpointSize } from "../../../styles/Breakpoints";
import { CardProduct } from "../../atoms/CardProduct";

const breakPoints = [
  { width: 400, itemsToShow: 2 },
  { width: BreakpointSize.sm, itemsToShow: 3 },
  { width: BreakpointSize.md, itemsToShow: 4 },
  { width: BreakpointSize.lg, itemsToShow: 4 },
  { width: BreakpointSize.xl, itemsToShow: 5 },
];

export const Carousel = ({ title, iframeProducts }: any) => {
  const carouselRef = useRef<any>(null);

  const onNextStart = (currentItem: ItemObject, nextItem: ItemObject) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem: ItemObject, nextItem: ItemObject) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(iframeProducts.length);
    }
  };

  return (
    <CarouselContainer>
      <ContWrapper>
        <h1>{title}</h1>
        <CarouselLib
          breakPoints={breakPoints}
          isRTL
          ref={carouselRef}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          disableArrowsOnEnd={false}
        >
          {iframeProducts.map((item: any, index: number) => (
              <CardProduct key={index} frameProduct={item} />
          ))}
        </CarouselLib>
      </ContWrapper>
    </CarouselContainer>
  );
};

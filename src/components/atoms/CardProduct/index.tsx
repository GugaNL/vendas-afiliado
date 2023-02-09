import { ProductIframe } from "./styles";

export const CardProduct = ({ frameProduct }: any) => {
  return (
    <ProductIframe
      sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
      scrolling="no"
      frameBorder="0"
      src={frameProduct?.frameUrl}
    ></ProductIframe> 
  );
};

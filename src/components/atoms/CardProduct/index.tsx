import IframeResizer from 'iframe-resizer-react';
import { ProductIframe } from "./styles";

export const CardProduct = ({ frameProduct }: any) => {
  return (
    <ProductIframe
      sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
      scrolling="no"
      frameBorder="0"
      src={frameProduct?.iframeUrl}
    ></ProductIframe> 

    // <IframeResizer
    //   sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
    //   style={{ width: '120px', height: '240px', minWidth: '100%', minHeight: '100%', border: 'none'}}
    //   src={frameProduct?.iframeUrl}
    // ></IframeResizer> 
  );
};

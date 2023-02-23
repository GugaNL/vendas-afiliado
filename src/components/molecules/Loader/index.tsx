import { TailSpin } from "react-loader-spinner";
import { Container } from "./styles";

export const Loader = () => {
  return (
    <Container>
      <TailSpin
        height="120"
        width="120"
        color="#cc0c39"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  );
};

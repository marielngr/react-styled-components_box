import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents";
import styled from "styled-components";

const FlexContainer = styled.section`
  display: flex;
`;

export default function HomePage() {
  return (
    <FlexContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </FlexContainer>
  );
}

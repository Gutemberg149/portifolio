import React from "react";
import styled from "styled-components";
import tech from "./components/images/project/tech.png";

function TechLogo() {
  return (
    <Wrapper>
      <img src={tech} alt="" />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;
export default TechLogo;

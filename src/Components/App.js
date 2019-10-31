import React from 'react';
import Router from './Router';
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Router />
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;

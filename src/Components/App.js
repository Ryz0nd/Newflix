import GlobalStyles from "./GlobalStyles";
import Helmet from "react-helmet";
import React from "react";
import Router from "./Router";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

function App() {
  return (
    <>
      <Helmet>
        <title>Newflix</title>
        <meta
          name="description"
          content="Newflix 홈페이지입니다. 이 곳에서 다양한 비디오를 접해보실 수 있습니다."
        ></meta>
        <link
          rel="icon"
          type="image/png"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Helmet>
      <Wrapper>
        <Router />
        <GlobalStyles />
      </Wrapper>
    </>
  );
}

export default App;

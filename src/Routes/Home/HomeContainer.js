import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Helmet from "react-helmet";
import Home from "../../Components/Home";
import Poster from "../../Components/Poster";
import View from "../../Components/View";
import { apiOriginal } from "../../store/action/index";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  top: 35vw;
  z-index: 90;
  margin-bottom: 20px;
`;

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiOriginal());
  }, []);
  const originalData = useSelector(state => state.original.contents, []) || [];

  return (
    <>
    <Helmet>
      <title>Newflix | 홈</title>
      <meta name="description" content="Newflix의 메인 화면입니다. 이 곳에서 다양한 비디오를 접해보실 수 있습니다."></meta>
      <link rel="icon" type="image/png" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" />
    </Helmet>
      <Home />
      <Wrapper>
        {originalData.results && (
          <View title="넷플릭스 오리지널">
            {originalData.results.map(mv => (
              <Poster key={mv.id} imageUrl={mv.poster_path} />
            ))}
          </View>
        )}
      </Wrapper>
    </>
  );
};

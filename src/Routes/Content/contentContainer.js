import React, { useEffect } from "react";
import {
  apiMvPlaying,
  apiOriginal,
  apiTvAiring
} from "../../store/action/index";
import { useDispatch, useSelector } from "react-redux";

import Helmet from "react-helmet";
import Poster from "../../Components/Poster";
import View from "../../Components/View";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 30px;
`;

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiOriginal());
    dispatch(apiTvAiring());
    dispatch(apiMvPlaying());
  }, []);
  const originalData = useSelector(state => state.original.contents, []) || [];
  const airingData = useSelector(state => state.tvAiring.contents, []) || [];
  const playingData = useSelector(state => state.mvPlaying.contents, []) || [];

  return (
    <>
      <Helmet>
        <title>Newflix | 컨텐츠</title>
        <meta
          name="description"
          content="Newflix의 컨텐츠 화면입니다. 이 곳에서 다양한 비디오를 접해보실 수 있습니다."
        ></meta>
        <link
          rel="icon"
          type="image/png"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Helmet>
      <Wrapper>
        {originalData.results && (
          <View title="넷플릭스 오리지널">
            {originalData.results.map(mv => (
              <Poster key={mv.id} imageUrl={mv.poster_path} />
            ))}
          </View>
        )}
        {airingData.results && (
          <View title="최신 TV 프로그램">
            {airingData.results.map(mv => (
              <Poster key={mv.id} imageUrl={mv.poster_path} />
            ))}
          </View>
        )}
        {playingData.results && (
          <View title="상영중인 영화">
            {playingData.results.map(mv => (
              <Poster key={mv.id} imageUrl={mv.poster_path} />
            ))}
          </View>
        )}
      </Wrapper>
    </>
  );
};

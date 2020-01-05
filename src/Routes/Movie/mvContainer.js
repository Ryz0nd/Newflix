import React, { useEffect } from "react";
import {
  apiMvPlaying,
  apiMvPopular,
  apiMvTopRated
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
    dispatch(apiMvPopular());
    dispatch(apiMvTopRated());
    dispatch(apiMvPlaying());
  }, []);
  const popularData = useSelector(state => state.mvPopular.contents, []) || [];
  const topData = useSelector(state => state.mvTop.contents, []) || [];
  const playingData = useSelector(state => state.mvPlaying.contents, []) || [];

  return (
    <>
      <Helmet>
        <title>Newflix | 영화</title>
        <meta
          name="description"
          content="Newflix의 영화 화면입니다. 이 곳에서 다양한 비디오를 접해보실 수 있습니다."
        ></meta>
        <link
          rel="icon"
          type="image/png"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Helmet>
      <Wrapper>
        {popularData.results && (
          <View title="인기 있는 영화">
            {popularData.results.map(mv => (
              <Poster key={mv.id} imageUrl={mv.poster_path} />
            ))}
          </View>
        )}
        {topData.results && (
          <View title="평점이 높은 영화">
            {topData.results.map(mv => (
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

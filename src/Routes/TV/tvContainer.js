import React, { useEffect } from "react";
import {
  apiTvAiring,
  apiTvPopular,
  apiTvTopRated
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
    dispatch(apiTvPopular());
    dispatch(apiTvTopRated());
    dispatch(apiTvAiring());
  }, []);
  const popularData = useSelector(state => state.tvPopular.contents, []) || [];
  const topData = useSelector(state => state.tvTop.contents, []) || [];
  const airingData = useSelector(state => state.tvAiring.contents, []) || [];
  console.log(airingData);

  return (
    <>
      <Helmet>
        <title>Newflix | TV</title>
        <meta
          name="description"
          content="Newflix의 TV 화면입니다. 이 곳에서 다양한 비디오를 접해보실 수 있습니다."
        ></meta>
        <link
          rel="icon"
          type="image/png"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Helmet>
      <Wrapper>
        {popularData.results && (
          <View title="인기 있는 Tv 프로그램">
            {popularData.results.map(tv => (
              <Poster key={tv.id} imageUrl={tv.poster_path} />
            ))}
          </View>
        )}
        {topData.results && (
          <View title="평점이 높은 TV 프로그램">
            {topData.results.map(tv => (
              <Poster key={tv.id} imageUrl={tv.poster_path} />
            ))}
          </View>
        )}
        {airingData.results && (
          <View title="최신 TV 프로그램">
            {airingData.results.map(tv => (
              <Poster key={tv.id} imageUrl={tv.poster_path} />
            ))}
          </View>
        )}
      </Wrapper>
    </>
  );
};

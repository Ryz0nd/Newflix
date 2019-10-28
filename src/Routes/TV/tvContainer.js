import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  apiTvPopular,
  apiTvTopRated,
  apiTvAiring
} from "../../store/action/index";
import View from "../../Components/View";
import Poster from "../../Components/Poster";

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
  );
};

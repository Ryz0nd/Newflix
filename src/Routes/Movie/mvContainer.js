import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {apiMvTopRated, apiMvPopular, apiMvPlaying} from "../../store/action/index";
import View from "../../Components/View";
import Poster from "../../Components/Poster";

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
  );
};

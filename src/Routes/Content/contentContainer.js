import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {apiTvAiring, apiMvPlaying, apiOriginal } from "../../store/action/index";
import View from "../../Components/View";
import Poster from "../../Components/Poster";

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
  );
};

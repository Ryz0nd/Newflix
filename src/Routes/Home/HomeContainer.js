import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { apiOriginal } from "../../store/action/index";
import View from "../../Components/View";
import Home from "../../Components/Home";
import Poster from "../../Components/Poster";

const Wrapper = styled.div`
  position: relative;
  top: 35vw;
  z-index: 90;
`;

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiOriginal());
  }, []);
  const originalData = useSelector(state => state.original.contents, []) || [];

  return (
    <>
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

import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {apiTvPopular} from "../../store/action/index";
import View from "../../Components/View";
import Poster from "../../Components/Poster";
// import {tvToprated, tvPopular, tvLatest, tvDetail, tvApi } from "../../api";

export default () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(apiTvPopular());
  }, []);
  const data = useSelector(state => state.tvPopular.contents);
  console.log(data);

  return(
    <>
    {data.results && (
      <View title= "인기 있는 TV 프로그램">
        {data.results.map(tv =>(
          <Poster key={tv.id} imageUrl ={tv.poster_path} />
        ) )}
      </View>
    )}
    </>
  );
}

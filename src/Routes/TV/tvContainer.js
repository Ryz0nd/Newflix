import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {apiTvPopular} from "../../store/action/index";
import TVPresent from "./tvPresenter";
import Slider from "../../Components/Slider/Slider";
// import {tvToprated, tvPopular, tvLatest, tvDetail, tvApi } from "../../api";

export default () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(apiTvPopular());
  }, []);
  const data = useSelector(state => state.tvPopular.contents);
  console.log(data);

  return(
    <div>
      <p>인기 있는 영상</p>
      <Slider />
      {/* {data.results && data.results.map(tv => (
        <Slider key={tv.id} imageUrl={tv.poster_path} />
      ))} */}
    </div>
  );
}
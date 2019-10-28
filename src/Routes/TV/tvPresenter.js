import React from "react";
import styled from "styled-components";
import Poster from "../../Components/Poster";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Slider from "../../Components/Slider/Slider"

const Item = styled.div``;

const TvPresent = ({topRated, popular, latest, loading, error})=> {
  // console.log(topRated);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Item>
          {popular && popular.length > 0 && (
            <>
              {popular.map(tv => (
                // <Poster key={tv.id} imageUrl={tv.poster_path} />
                <Slider key={tv.id} imageUrl = {tv.poster_path} />
              ))}
            </>
          )}
        </Item>
      )}
    </>
  );
};

TvPresent.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    latest: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default TvPresent;

/* <>
    {/* {
  loading ? (
    <Loader />
  ) : (
    //   <div>
    //   {topRated.map(movie => (
    //     <div>
    //      <span key={movie.id}>{movie.title}</span>
    //     </div>
    //   ))}
    // </div>
  )
} */

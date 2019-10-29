import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  background-position: center center;
  transition: all 0.3s ease-out;
  &:hover{
    transform: scale(1.3);
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Poster = ({ imageUrl }) => {
  return (
    <ImageContainer>
      <Image
        bgUrl={
          imageUrl
            ? `https://image.tmdb.org/t/p/w300/${imageUrl}`
            : require("../Assets/NoPoster.jpg")
        }
      />
    </ImageContainer>
  );
};

Poster.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default Poster;

/* @media screen and (max-width: 499px) {
    width: 50%;
  }
  @media screen and (max-width: 799px) and (min-width: 500px) {
    width: 33.333333%;
  }
  @media screen and (min-width: 800px) and (max-width: 1099px) {
    width: 25%;
  }
  @media screen and (max-width: 1399px) and (min-width: 1100px) {
    width: 20%;
  }
  @media screen and (min-width: 1400px) {
    width: 16.66666667%;
  } */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`

`;
const Item = styled.div`
  @media screen and (max-width: 499px) {
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
  }
  height: 300px;
  background-image: url(${props => props.bgUrl});
  /* box-sizing: border-box; */
  z-index: 1;
  display: inline-block;
  position: relative;
  white-space: normal;
  vertical-align: top;
  padding: 0 2px;
  /* &:first-child{
        margin-right: auto;
        text-align:left;
    } */
`;

const Poster = ({id, imageUrl}) => (
    <Container>
      <Item bgUrl={`https://image.tmdb.org/t/p/w300/${imageUrl}`}/>
    </Container>
);

export default Poster;
import React from "react";
import styled from "styled-components";


const Item = styled.div`
  z-index: 1;
  height: 180px;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  box-sizing: border-box;
  /* flex: 0 0 19.7%; */
  /* margin: 0 2px; */
  transition: transform 300ms ease 100ms;
  &:hover {
    transform: scale(1.5);
  }
  &:hover~ {
    transform: translateX(25%);
  }
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
`;


const Container = styled.div`
  padding: 0 4%;
  display: flex;
  padding: 0 55px;
  /* ${Item}:hover{  
    transform: translateX(-25%);
  } */

`; //왼쪽으로 밀기

export default ({id, imageUrl}) => {
  return(
    <Container>
      <Item  bgUrl={`https://image.tmdb.org/t/p/w300/${imageUrl}`} />
    </Container>
  );
}

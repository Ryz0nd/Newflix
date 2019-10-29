import React from "react";
import styled from "styled-components";

const MainImage = styled.div`
  width: 100%;
  height: 56.25vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: 
    linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.0)),
    url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 1;
`;
const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 35%;
  left: 4%;
  width: 36%;
  z-index: 10;
  flex-direction: column;
`;

const TextImage = styled.div`
  width: 90%;
  top: 20%;
  min-height: 13.8vw;
  position: relative;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  user-select: none;
`;

const Text = styled.div`
  position: relative;
  top: 23%;
  color: #fff;
  font-weight: normal;
  line-height: normal;
  width: 100%;
  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  user-select: none;
  word-break: keep-all;
`;

const ButtonWrapper = styled.div`
  position: relative;
  top: 26%;
  z-index: 10;
  display: flex;
  line-height: 88%;
`;

const Button = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(51, 51, 51, 0.8);
  border-width: 0;
  padding: 4% 9%;
  height: 1.2vw;
  border-radius: 0.2vw;
  box-shadow: none;
  margin-bottom: 0.75em;
  margin-right: 0.75em;
  font-size: 1.1vw;
  font-weight: bold;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.08);
  }
`;

export default () => {
  return (
    <MainImage bg={require("../Assets/Home.jpg")}>
      <TextWrapper>
        <TextImage bg={require("../Assets/Text.jpg")} />
        <Text>
          이런 사람은 난생처음이다. 동백에게 강하고 장하다고 말해준 남자. 그
          말이 그대로 동백의 마음에 박혔다. 그래서 앞으로 더 씩씩해지려 한다.
          든든한 내 편이 있으니까.
        </Text>
        <ButtonWrapper>
          <Button>재생</Button>
          <Button>내가 찜한 콘텐츠</Button>
          <Button>상세 정보</Button>
        </ButtonWrapper>
      </TextWrapper>
    </MainImage>
  );
};

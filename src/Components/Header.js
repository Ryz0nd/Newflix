import React, {useState, useEffect} from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import useMediaQuery from "react-hook-media-query";
import {LogoImg} from "./Icons";

// const Header = styled.div`
//   width: 100%;
//   height: 70px;
//   display: block;
// `;

const HeaderContainer = styled.header`
  width: 100%;
  height: 41px;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #141414;
  position: fixed;
  ${props =>
    props.scroll
      ? css`
          background-color: #141414;
          transition: background-color 0.4s;
        `
      : css`
          background-color: transparent;
          transition: background-color 0.4s;
        `};

  @media (min-width: 950px) {
    height: 68px;
  }
`;

const HeaderMain = styled.div`
    position: relative;
    display: flex;
    z-index: 2;
    height: 41px;
    background-color: transparent;
    padding: 0 4%;
    align-items: center;
    @media (min-width: 950px) {
    height: 68px;
  }
`;

const Logo = styled.div`
  z-index:3;
  margin-top: 8px;
`;

const UList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    list-style-type: disc;
    color: #fff;
    align-items: center;
`;

const List = styled.li`
  display: block;
  list-style-type: none;
  margin-left: 18px;
  font-size: 0.8rem;
`;

const HLink = styled(Link)`

`;


export default withRouter(({location: {pathname}}) => {
    const media = useMediaQuery("(min-width: 950px)");
    const smedia = useMediaQuery("(max-width: 700px)");
    const [Scroll, setScroll] = useState(false);
    const handleScroll = () => {
        if(window.scrollY === 0) {
            setScroll(false);
        } else {
            setScroll(true);
        }
    }
    window.addEventListener('scroll', handleScroll);
    // useEffect(()=>{
        
    // });
    return (
      <HeaderContainer scroll={Scroll}>
        <HeaderMain>
          <Logo>
            <HLink to="/">
              <LogoImg
                width={media ? "83" : "75"}
                height={media ? "25" : "24"}
              />
            </HLink>
          </Logo>
          {smedia ? (
            <UList>
              <List>메뉴</List>
            </UList>
          ) : (
            <UList>
              <List current={pathname === "/"}>
                <HLink to="/">홈</HLink>
              </List>
              <List current={pathname === "/TV"}>
                <HLink to="/TV">TV 프로그램</HLink>
              </List>
              <List current={pathname === "/TV"}>
                <HLink to="/Movie">영화</HLink>
              </List>
              <List current={pathname === "/TV"}>
                <HLink to="/TV">최신 콘텐츠</HLink>
              </List>
            </UList>
          )}
        </HeaderMain>
      </HeaderContainer>
    );
});
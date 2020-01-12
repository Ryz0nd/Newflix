import { Link, withRouter } from "react-router-dom";
import React, {useState} from "react";
import styled, { css } from "styled-components";

import {LogoImg} from "./Icons";
import useMediaQuery from "react-hook-media-query";

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
  align-items: center;
  justify-content: center;
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
  transition: all 0.3s ease-in;
  &:hover {
    color: #999;
  }
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
              <List current={pathname === "/Movie"}>
                <HLink to="/Movie">영화</HLink>
              </List>
              <List current={pathname === "/NewContent"}>
                <HLink to="/NewContent">최신 콘텐츠</HLink>
              </List>
            </UList>
          )}
        </HeaderMain>
      </HeaderContainer>
    );
});
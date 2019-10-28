import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  /* text-align: center; */
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`;

const Copyright = styled.div`
  color: #999;
`;

export default () => (
  <Footer>
    <Copyright>Newflix {new Date().getFullYear()} &copy;</Copyright>
  </Footer>
);

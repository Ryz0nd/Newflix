import React from "react";
import styled from "styled-components";

const content = styled.div`
  margin-top: 40px;
  height: 300px;
  position: relative;
`;

const bg = styled.div`
    display: flex;
    height: 100%;
`;

const left = styled.div`
  background: black;
  width: 30%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background-image: linear-gradient(to right, #000, transparent);
    top: 0;
    bottom: 0;
    left: 100%;
    width: 275px;
  }
`;

const right = styled.div`
  background: green;
  width: 70%;
`;


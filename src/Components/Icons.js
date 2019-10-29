import React from "react";
import netflix from "../Assets/netflix.png";

export const LogoImg = ({ width, height }) => (
  <img src={netflix} alt="Netflix" width={width} height={height} />
);

export const PlayFull = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M3 22v-20l18 10-18 10z" />
  </svg>
);

export const PlayEmpty = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M3 22v-20l18 10-18 10z" />
  </svg>
);

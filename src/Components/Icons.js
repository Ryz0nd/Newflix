import React from "react";
import netflix from "../Assets/netflix.png";

export const LogoImg = ({width, height}) => (
         <img
           src={netflix}
           alt="Netflix"
           width={width}
           height={height}
         />
       );
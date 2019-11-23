import React from "react";
import { Img } from "./style";
const DEFAULT_IMAGE = "";
export const Pic = ({ src = DEFAULT_IMAGE, alt = "", classList }) => {
  return (
    <a href={src} className={classList} target="_blank">
      <Img src={src} alt={alt} />
    </a>
  );
};

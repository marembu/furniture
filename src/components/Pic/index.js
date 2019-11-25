import React from "react";
import { Img } from "./style";
const DEFAULT_IMAGE = "";
export const Pic = ({ src = DEFAULT_IMAGE, alt = "", classList, link }) => {
  return (
    <a href={src} className={classList}>
      <Img src={src} alt={alt} rel={link} />
    </a>
  );
};

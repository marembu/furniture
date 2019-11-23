import React from "react";
import { Pic } from "../Pic/";
import { Container } from "./style";
export const PicViewerComponent = ({ src = "" } = {}) => {
  return (
    <Container>
      <Pic src={src} />
    </Container>
  );
};

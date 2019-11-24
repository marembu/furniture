import React from "react";
import { Pic } from "../Pic/";
import { Container } from "./style";
export const ListOfPicsComponent = ({ source } = {}) => {
  return (
    <Container
      className="spotlight-group"
      data-animation="fade"
      data-theme="false"
      data-page="true"
      data-animation="flip"
      data-infinite="false"
      data-player="false"
      data-autohide="true"
      data-autofit="false"
    >
      {source.map(pic => {
        return <Pic key={pic.id} {...pic} />;
      })}
    </Container>
  );
};

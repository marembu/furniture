import React, { useEffect, Fragment } from "react";
import { ListOfPics } from "../../containers/ListOfPics/";
import { Nav } from "../../containers/Nav/";
import { GlobalStyle } from "../../Styles/GlobalStyles";
export const App = () => {
  useEffect(function() {
    let startGallery = window.document.getElementsByClassName("spotStart")[0];
    startGallery.click();
  }, []);
  return (
    <Fragment>
      <GlobalStyle />
      {/* <Nav /> */}
      <ListOfPics />
    </Fragment>
  );
};

import React, { useEffect, useState, Fragment } from "react";
import { ListOfPicsComponent } from "../../components/ListOfPicsComponent/";
import { WrapperConsumer } from "../../store/";
//import { callSpot } from "../../js/spotlight.bundle-mod.js/index.js";
const ListOfPicsContainer = ({ context: { source } }) => {
  const [ready, setReady] = useState(false);
  useEffect(function() {
    // import("../../js/spotlight.bundle.js").then(() => {
    //   setReady(true);
    // });
    //callSpot();
  }, []);

  return <ListOfPicsComponent source={source} />;
};

const ListOfPics = WrapperConsumer(ListOfPicsContainer);
export { ListOfPics };

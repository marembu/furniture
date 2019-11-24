import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import "./js/spotlight.bundle.js";
// import { ListOfPics } from "./containers/ListOfPics/";
// import { Nav } from "./containers/Nav/";
// import { PicViewer } from "./containers/PicViewer/";
import { ContextStore } from "./store/";
// import { GlobalStyle } from "./Styles/GlobalStyles";

import { App } from "./containers/App/";

// function App() {
//   return (
//     <Fragment>
//       <GlobalStyle />
//       {/* <Nav /> */}
//       <ListOfPics />
//       {/* <PicViewer /> */}
//     </Fragment>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<ContextStore comp={<App />} />, rootElement);
// ReactDOM.render(<App />, rootElement);

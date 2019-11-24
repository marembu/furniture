import React from "react";
import { ContextStore } from "../../store/";
import { App } from "../App/";
import ReactResizeDetector from "react-resize-detector";
import { pics_desktop, pics_mobile } from "../../sources/";

export class ContextStoreContainer extends React.Component {
  state = {
    source: []
  };
  isMobile = w => {
    let currentWidth = w;
    //console.log(currentWidth);
    let mobile = currentWidth <= 768 ? true : false;
    //console.log(mobile);
    this.setState({
      source: mobile ? pics_mobile : pics_desktop
    });
    return { mobile, currentWidth };
  };
  render() {
    //console.log(this.state);
    return (
      <React.Fragment>
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.isMobile}
        />
        {this.state && <ContextStore comp={<App />} state={this.state} />}
      </React.Fragment>
    );
  }
}

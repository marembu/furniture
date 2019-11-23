import React from "react";
import { WrapperConsumer } from "../../store/";
import { PicViewerComponent } from "../../components/PicViewerComponent/";
const PicViewerContainer = ({ context: { source } }) => {
  return <PicViewerComponent src={source[0].src} />;
};

const PicViewer = WrapperConsumer(PicViewerContainer);
export { PicViewer };

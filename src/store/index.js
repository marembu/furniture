import React, { createContext } from "react";
import { pics, pics_m } from "../sources/";
const { Provider, Consumer } = createContext();

class ContextStore extends React.Component {
  state = {
    source: pics_m
  };
  render() {
    return <Provider value={this.state}>{this.props.comp}</Provider>;
  }
}

const WrapperConsumer = Component => {
  return props => {
    return (
      <Consumer>
        {context => <Component {...props} context={context} />}
      </Consumer>
    );
  };
};

export { WrapperConsumer };
export { ContextStore };

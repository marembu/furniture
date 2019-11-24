import React, { createContext, Fragment } from "react";
const { Provider, Consumer } = createContext();
class ContextStore extends React.Component {
  render() {
    //console.log(this.props.state);
    return <Provider value={this.props.state}>{this.props.comp}</Provider>;
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

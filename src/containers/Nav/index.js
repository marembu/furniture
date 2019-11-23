import React from "react";
import { NavComponent } from "../../components/NavComponent/";
import { WrapperConsumer } from "../../store/";
function handleClick(e) {
  console.log(e.target.value);
}
const NavContainer = ({ context: { source } }) => {
  //const Nav = props => {
  //console.log(props);
  //const { source } = props.context;
  //console.log(source);
  return <NavComponent source={source} handleClick={handleClick} />;
};
const Nav = WrapperConsumer(NavContainer);
export { Nav };

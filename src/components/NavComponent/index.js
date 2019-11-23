import React from "react";
import { NavItem } from "../NavItem/";
import { Container } from "./style";
//import WrapperConsumer from "../../store/";
// const NavComponent = ({ context: { source }, handleClick } = {}) => {
export const NavComponent = props => {
  //console.log(props);
  const { source, handleClick } = props;
  return (
    <Container>
      {source.map(pic => {
        return (
          <NavItem key={pic.id} handleClick={handleClick} value={pic.id} />
        );
      })}
    </Container>
  );
};

import React from "react";
import { Button } from "./style";
export const NavItem = ({ handleClick, value }) => {
  return <Button onClick={handleClick} value={value} />;
};

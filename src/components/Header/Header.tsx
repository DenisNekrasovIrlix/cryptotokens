import React from "react";
import { HeaderContent, HeaderWrapper } from "./style";
import { Logo } from "components/Logo";
import { Navigator } from "components/Navigator";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent container>
        <Logo />
        <Navigator />
      </HeaderContent>
    </HeaderWrapper>
  );
};

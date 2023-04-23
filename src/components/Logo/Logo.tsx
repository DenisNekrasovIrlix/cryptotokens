import React from "react";
import { Typography } from "@mui/material";
import { LinkWrapper } from "./style";

export const Logo = () => {
  return (
    <LinkWrapper to={"/"}>
      <Typography
        variant={"h1"}
        fontWeight={"bold"}
        color={"divider"}
        textAlign={"center"}
      >
        COINS
      </Typography>
    </LinkWrapper>
  );
};

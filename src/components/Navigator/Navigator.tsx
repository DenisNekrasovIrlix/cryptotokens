import React from "react";
import { menuLinks } from "config/menuLinks";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { MenuButton } from "./style";
export const Navigator = function () {
  const navigate = useNavigate();
  return (
    <Stack
      useFlexGap
      justifyContent={"center"}
      flexWrap={"wrap"}
      direction={"row"}
      spacing={1}
    >
      {menuLinks.map(({ id, title, link }) => (
        <MenuButton
          variant={"contained"}
          key={id}
          onClick={() => navigate(link)}
        >
          {title}
        </MenuButton>
      ))}
    </Stack>
  );
};

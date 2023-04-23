import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Главная страница приложения
export const Main = function () {
  return (
    <Stack spacing={2}>
      <Typography textAlign={"center"} variant={"h2"}>
        Приложение для сбора статистики криптовалют
      </Typography>
      <Typography textAlign={"center"} variant={"subtitle1"}>
        Криптовалюта — это разновидность цифровой валюты, не имеющей физического
        воплощения и единого центра, который бы ее контролировал. Работает в так
        называемом «блокчейне» или цепочке блоков с информацией.
      </Typography>
    </Stack>
  );
};

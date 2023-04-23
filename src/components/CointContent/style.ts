import { Grid } from "@mui/material";
import { styled } from "@mui/system";
export const CoinContentBox = styled(Grid)({
  boxShadow: "0px 0px 15px 0px rgba(34, 60, 80, 0.25);",
  padding: "0.5rem",
  margin: "0.5rem",
});
export const CoinDesc = styled("p")(({ theme }) => ({
  marginTop: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));
export const CoinContentIcon = styled("img")(({ theme }) => ({
  maxWidth: "4rem",
}));

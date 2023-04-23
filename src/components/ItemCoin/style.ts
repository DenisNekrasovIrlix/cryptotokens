import { styled } from "@mui/system";
import { Grid } from "@mui/material";
export const ImageCoin = styled("img")({
  textDecoration: "none",
  maxWidth: "4rem",
});
export const CoinWrapper = styled(Grid)(({ theme }) => ({
  width: "22rem",
  padding: theme.spacing(2),
  borderRadius: "0.5rem",
  position: "relative",
  boxShadow: "0px 0px 10px 0px rgba(34, 60, 80, 0.5)",
  [theme.breakpoints.down("xs")]: {
    width: "14rem",
  },
}));
export const CoinProperties = styled(Grid)(({ theme }) => ({
  margin: `${theme.spacing(2)} 0`,
}));

export const InfoChangeSale = styled(Grid)({
  top: "0.5rem",
  right: "0.5rem",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  textAlign: "end",
});

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0F172A", // main background
      paper: "#1E293B",   // cards, containers
    },
    primary: {
      main: "#3B82F6", // blue
    },
    secondary: {
      main: "#a292c6ff", // purple
    },
    text: {
      primary: "#F1F5F9",
      secondary: "#94A3B8",
    },
  },
  shape: {
    borderRadius: 10,
  },
});

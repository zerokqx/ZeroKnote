import { createThemeContract } from "@vanilla-extract/css";
import { Statuses, Theme, ThemeUnit } from "@/types/themeElemet.types.ts";

const statusContract: Statuses<null> = {
  warning: null,
  error: null,
  success: null,
};

const themeUnitContract: ThemeUnit<null> & Statuses<null> = {
  primary: null,
  secondary: null,
  accent: null,
  muted: null,
  ...statusContract,
};

export default createThemeContract<Theme<null>>({
  active: null,
  button: themeUnitContract,
  window: {
    primary: null,
  },
  border: {
    primary: null,
    ...statusContract,
  },
  text: themeUnitContract,
  block: {
    primary: null,
  },
});

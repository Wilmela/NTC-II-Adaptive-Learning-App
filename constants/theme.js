export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const COLORS = {
  bg: "#f1f5f8",
  primary: "#151E78", //"#0085e7"
  secondary: "#4D626C",

  white: "#FFF",
  gray: "#74858C",
};

export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.25,

    elevation: 5,
  },
  dark: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: SIZES.font,
    shadowOpacity: 0.4,

    elevation: 5,
  },
};

export const SCREENS = {
  width: {
    small: 375,
    medium: 500,
    large: 700,
  },
  height: {
    small: 768,
    medium: 926,
    large: 1024,
  },
};


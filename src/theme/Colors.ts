export interface ThemeColors {
  white: string;
  black: string;
  primary: string;
  primaryLight: string;
  background: string;
  text: string;
  textSecondary: string;
  border: string;
  shadow: string;
  shadowDark: string;
  tabBackground: string;
  tabActive: string;
  tabInactive: string;
  tabBorder: string;
  cardBackground: string;
  accent: string;
  danger: string;
  warning: string;
  inputBackground: string;
  inputPlaceholder: string;
  divider: string;
  isDark: boolean;
}

export const commonColors = {
  primary: "#1A73E8", // Premium blue
  primaryLight: "#E8F0FE",
  accent: "#34A853", // Green accent
  danger: "#EA4335",
  warning: "#FBBC05",
  white: "#FFFFFF",
  black: "#000000",
};

export const lightTheme: ThemeColors = {
  ...commonColors,
  background: "#F8F9FA",
  text: "#202124",
  textSecondary: "#5F6368",
  border: "#DADCE0",
  shadow: "rgba(0, 0, 0, 0.06)",
  shadowDark: "rgba(0, 0, 0, 0.12)",
  tabBackground: "rgba(255, 255, 255, 0.95)",
  tabActive: "#1A73E8",
  tabInactive: "#70757A",
  tabBorder: "rgba(0, 0, 0, 0.03)",
  cardBackground: "#FFFFFF",
  inputBackground: "#FFFFFF",
  inputPlaceholder: "#9AA0A6",
  divider: "#DADCE0",
  isDark: false,
};

export const darkTheme: ThemeColors = {
  ...commonColors,
  background: "#121212",
  text: "#E8EAED",
  textSecondary: "#9AA0A6",
  border: "#3C4043",
  shadow: "rgba(0, 0, 0, 0.35)",
  shadowDark: "rgba(0, 0, 0, 0.55)",
  tabBackground: "rgba(30, 30, 30, 0.95)",
  tabActive: "#8AB4F8", // lighter blue for dark mode
  tabInactive: "#9AA0A6",
  tabBorder: "rgba(255, 255, 255, 0.05)",
  cardBackground: "#1E1E1E",
  inputBackground: "#2D2D2D",
  inputPlaceholder: "#80868B",
  divider: "#3C4043",
  isDark: true,
};

// Map legacy export to lightTheme to prevent compile breakages during refactoring
export const Colors = lightTheme;

import { createContext, useContext, useState } from "react";

type THEME = "light" | "dark" | "system";

interface ThemeState {
  theme: THEME;
  setTheme: (theme: THEME) => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: THEME;
}

const ThemeProviderContext = createContext<ThemeState | undefined>(undefined);
export const ThemeProvider = ({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<THEME>(defaultTheme);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeProviderContext);

  if (themeContext === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return themeContext;
};

import { useTheme, ThemeProvider } from "./context";

export const Parentcomponenrt = () => {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
};

function Component() {
  const context = useTheme();

  const { setTheme } = context;
  console.log(context);

  return (
    <div>
      <h2>React TypeScript</h2>
      <button
        onClick={() => {
          if (context.theme === "light") {
            setTheme("dark");
          }
          if (context.theme === "dark") {
            setTheme("light");
          }
          if (context.theme === "system") {
            setTheme("light");
          }
        }}
      >
        toggle Theme
      </button>
    </div>
  );
}

export default Component;

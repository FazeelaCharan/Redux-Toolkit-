import useThemeStore from "../store/themeStore";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{`Current Theme: ${theme}`}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;

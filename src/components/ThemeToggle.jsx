import { FaMoon, FaSun } from "react-icons/fa";
import { useGlobalContext } from "../context";

const ThemeToggle = () => {
  const { isDarkTheme, setTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button
        className="dark-toggle"
        onClick={() => {
          setTheme();
        }}
      >
        {isDarkTheme ? <FaMoon style={{ color: "#f0f0f0" }} /> : <FaSun />}
      </button>
    </section>
  );
};

export default ThemeToggle;

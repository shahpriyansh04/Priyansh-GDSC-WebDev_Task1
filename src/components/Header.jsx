import Logo from "/gdsc_logo.jpg";
import { Navbar, Typography } from "@material-tailwind/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

function Header() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="sticky p-4 text-black bg-white dark:text-white top-0 border-none  z-10 h-max dark:bg-black max-w-full shadow-md rounded-none px-10">
      <div className="flex justify-between items-center">
        <img src={Logo} alt="logo" className="p-" />
        <div className="flex items-center space-x-8">
          <div className="flex space-x-5 text-xl">
            <a href="">Home</a>
            <a>Events</a>
            <a>Team</a>
            <a>Contact</a>
          </div>

          <Button
            variant="outlined"
            className="p-2 bg-white dark:bg-white dark:border-white flex"
            onClick={handleTheme}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] bg-white rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
          </Button>
        </div>
      </div>
    </nav>
  );
}
export default Header;

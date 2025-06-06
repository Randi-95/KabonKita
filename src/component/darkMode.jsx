import { useEffect, useState } from "react";
import {Sun, Moon} from "react-feather"

export default function DarkModeToggle(props) {
    const {colorDark="black", colorLight="white"} = props
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "enabled";
    });


    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", "disabled");
        }
    }, [darkMode]);



    return (
        <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setDarkMode(prev => !prev)}
        >
            {darkMode ? <Sun color={colorLight} /> : <Moon color={colorDark} />}
        </div>
    );
}

import { useEffect, useState } from "react";
import {Sun, Moon} from "react-feather"

export default function DarkModeToggle(props) {
    const {colorDark="black", colorLight="white"} = props
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "enabled";
    });


    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("light");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.documentElement.classList.remove("light");
            localStorage.setItem("darkMode", "disabled");
        }
    }, [darkMode]);



    return (
        <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setDarkMode(prev => !prev)}
        >
            {darkMode ? <Moon color={colorLight} /> : <Sun color={colorDark} />}
        </div>
    );
}

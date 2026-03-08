"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: any) => {

const [theme,setTheme] = useState("light");

useEffect(()=>{

const saved = localStorage.getItem("theme");

if(saved){
setTheme(saved);
document.documentElement.classList.add(saved);
}

},[]);

const toggleTheme = () => {

const newTheme = theme === "light" ? "dark" : "light";

setTheme(newTheme);

localStorage.setItem("theme",newTheme);

document.documentElement.classList.remove("light","dark");

document.documentElement.classList.add(newTheme);

};

return(

<ThemeContext.Provider value={{theme,toggleTheme}}>
{children}
</ThemeContext.Provider>

);

};

export const useTheme = ()=> useContext(ThemeContext);
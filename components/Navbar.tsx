"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Navbar(){

const {toggleTheme} = useTheme();

return(

<div className="flex justify-end p-4 bg-gray-200 dark:bg-gray-900">

<button
onClick={toggleTheme}
className="px-4 py-2 bg-blue-500 text-white rounded"
>

Toggle Theme

</button>

</div>

);

}
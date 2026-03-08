"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Dashboard(){

return(

<div className="flex">

<Sidebar/>

<div className="flex-1">

<Navbar/>

<div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white dark:bg-gray-800 p-6 rounded shadow">

<h3 className="text-lg font-bold">Total Products</h3>
<p className="text-3xl">120</p>

</div>

<div className="bg-white dark:bg-gray-800 p-6 rounded shadow">

<h3 className="text-lg font-bold">Low Stock</h3>
<p className="text-3xl">8</p>

</div>

<div className="bg-white dark:bg-gray-800 p-6 rounded shadow">

<h3 className="text-lg font-bold">New Items</h3>
<p className="text-3xl">15</p>

</div>

</div>

</div>

</div>

);

}
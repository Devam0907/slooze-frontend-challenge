"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ProductTable from "@/components/ProductTable";

export default function Products(){

return(

<div className="flex">

<Sidebar/>

<div className="flex-1">

<Navbar/>

<div className="p-6">

<h1 className="text-2xl font-bold mb-4">

Products

</h1>

<ProductTable/>

</div>

</div>

</div>

);

}
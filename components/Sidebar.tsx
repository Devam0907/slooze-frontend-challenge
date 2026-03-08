"use client";

import Link from "next/link";
import { getRole } from "@/utils/roleGuard";

export default function Sidebar(){

const role = getRole();

return(

<div className="w-64 h-screen bg-gray-800 text-white p-5">

<h2 className="text-xl font-bold mb-5">Slooze</h2>

<ul className="space-y-3">

{role === "manager" && (

<li>
<Link href="/dashboard">Dashboard</Link>
</li>

)}

<li>
<Link href="/products">Products</Link>
</li>

</ul>

</div>

);

}
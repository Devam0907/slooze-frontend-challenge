"use client";

import { useRouter } from "next/navigation";

export default function Login(){

const router = useRouter();

const login = (role:any)=>{

localStorage.setItem("role",role);

if(role === "manager"){
router.push("/dashboard");
}else{
router.push("/products");
}

};

return(

<div className="flex items-center justify-center h-screen">

<div className="bg-white p-6 rounded shadow w-80">

<h2 className="text-xl font-bold mb-4">Login</h2>

<button
onClick={()=>login("manager")}
className="w-full bg-blue-500 text-white p-2 mb-2 rounded"
>

Login as Manager

</button>

<button
onClick={()=>login("storekeeper")}
className="w-full bg-green-500 text-white p-2 rounded"
>

Login as Store Keeper

</button>

</div>

</div>

);

}
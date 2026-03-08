export default function ProductTable(){

const products = [

{ id:1 , name:"Rice" , price:50 },
{ id:2 , name:"Wheat" , price:40 },
{ id:3 , name:"Sugar" , price:60 }

];

return(

<table className="w-full border">

<thead>

<tr className="bg-gray-200">

<th className="p-2">Name</th>
<th className="p-2">Price</th>

</tr>

</thead>

<tbody>

{products.map((p)=>(

<tr key={p.id} className="border-t">

<td className="p-2">{p.name}</td>
<td className="p-2">{p.price}</td>

</tr>

))}

</tbody>

</table>

);

}
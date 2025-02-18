
function MyButton(){
  return <button onClick={handleclick} className="font-bold text-xl bg-white p-2 pl-4 pr-4 mt-5  rounded	border-b-2 border-t-2 border-r-2 border-l-2  border-black	hover:bg-zinc-800 hover:text-white hover:ease-in duration-150">Hire me {count} </button>
}
export default function MyApp(){
return (
<MyButton />
);
}

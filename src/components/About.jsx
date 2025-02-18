import MyButton from "./MyButton";
function About(){
  return(
  <div className="container flex justify-around items-center p-6 mt-9 flex-wrap gap-6">
    <div className="p">
<h1 className="font-bold text-5xl">About <br />
Me</h1>
    </div>
   <div className="info">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br />
tristique elit nec malesuada tincidunt. Pellentesque lobortis <br />
metus quis ipsum mattis, vitae laoreet est posuere. Mauris <br />
bibendum eros massa, sit amet tempor sem lobortis non.</p>
<div className=" flex gap-5">
<MyButton />
<button className="font-bold text-xl bg-white p-2 pl-4 pr-4 mt-5  rounded	border-b-2 border-t-2 border-r-2 border-l-2  border-black	hover:bg-zinc-800 hover:text-white hover:ease-in duration-150">View cv</button>
</div>
   </div>
  </div>
  );
}
export default About;

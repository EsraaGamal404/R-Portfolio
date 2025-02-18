import MyButton from "./MyButton";
function Hero(){
  return(
<div className="container max-w-full flex justify-around items-center p-6 bg-slate-200 flex-wrap gap-5 ">
  <div className="info">
  <h1 className="font-bold text-5xl">Hello <br />
  I’m Ridho</h1>
  <p className="mt-5 ">Freelancer Web Developer</p>
 <MyButton />
  </div>
  <div className="image">
  <img className='w-80' src={require('../components/user.webp')} alt="" />
  </div>
</div>
  )
};
export default Hero;

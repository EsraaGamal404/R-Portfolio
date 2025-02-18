function Services(){
  return(
  <div className="container bg-slate-200 mt-9 max-w-full pt-8 p-8">
    <h1 className="font-bold text-center text-5xl">Services</h1>
    <p className="text-center mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br />
    tristique elit nec malesuada tincidunt. Pellentesque lobortis.</p>
   <div className="services-list flex justify-evenly items-center flex-wrap gap-3 mt-7">
    <div className="service bg-zinc-800 text-white w-fit p-7 rounded">
    <img className='w-10 flex justify-center items-center m-auto' src={require('../components/web-development.webp')} alt="" />
    <h3 className='text-center font-bold text-xl mt-3'>Web Development</h3>
    <p className='mt-3'>Lorem ipsum dolor sit <br />
    amet, consectetur <br />
    adipiscing elit. Proin <br />
    tristique elit nec</p>
    </div>
    <div className="service bg-zinc-800 text-white w-fit p-7 rounded">
 <img className='w-10 flex justify-center items-center m-auto' src={require('../components/web-design.webp')} alt="" />
 <h3 className='text-center font-bold text-xl mt-3'>Web Design</h3>
 <p className='mt-3'>Lorem ipsum dolor sit <br />
 amet, consectetur <br />
 adipiscing elit. Proin <br />
 tristique elit nec</p>
 </div>
 <div className="service bg-zinc-800 text-white w-fit p-7 rounded">
 <img className='w-5 flex justify-center items-center m-auto' src={require('../components/mobile.webp')} alt="" />
 <h3 className='text-center font-bold text-xl mt-3'>App Design</h3>
 <p className='mt-3'>Lorem ipsum dolor sit <br />
 amet, consectetur <br />
 adipiscing elit. Proin <br />
 tristique elit nec</p>
 </div>
   </div>
  </div>
  );
}
export default Services;
 
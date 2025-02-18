function Blog(){
  return(
  <div className="container mt-9">
    <h1 className='text-center font-bold text-5xl'>Blog</h1>
    <div className="blogs-list flex flex-wrap mt-20 gap-4 justify-center ">
   <div className="blog-item flex gap-5 items-center justify-center pr-5 w-fit flex-wrap">
     <div className="blog-image">
     <img className='w-60' src={require('../components/images.png')} alt="" />
     </div>
     <div className="blog-info p-10 bg-slate-200">
       <h3 className='font-bold text-xl'>Learn HTMl</h3>
       <p className='mt-3'>Lorem ipsum dolor <br /> sit amet, consecte <br /> adipiscing elit. Proin <br /> tristique elit nec. <br /> lorem ipsum</p>
     </div>
   </div>
   <div className="blog-item flex gap-5 items-center justify-center pr-5 flex-wrap">
     <div class="blog-image">
     <img className='w-60' src={require('../components/images.png')} alt="" />
     </div>
     <div className="blog-info p-10 bg-slate-200">
       <h3 className='font-bold text-xl'>Learn HTMl</h3>
       <p className='mt-3'>Lorem ipsum dolor <br /> sit amet, consecte <br /> adipiscing elit. Proin <br /> tristique elit nec. <br /> lorem ipsum</p>
     </div>
   </div>
   <div className="blog-item flex gap-5 items-center justify-center pr-5 flex-wrap">
     <div class="blog-image">
     <img className='w-60' src={require('../components/images.png')} alt="" />
     </div>
     <div className="blog-info p-10 bg-slate-200">
       <h3 className='font-bold text-xl'>Learn HTMl</h3>
       <p className='mt-3'>Lorem ipsum dolor <br /> sit amet, consecte <br /> adipiscing elit. Proin <br /> tristique elit nec. <br /> lorem ipsum</p>
     </div>
   </div>
   <div className="blog-item flex gap-5 items-center justify-center pr-5 flex-wrap">
     <div className="blog-image">
     <img className='w-60' src={require('../components/images.png')} alt="" />
     </div>
     <div className="blog-info p-10 bg-slate-200">
       <h3 className='font-bold text-xl'>Learn HTMl</h3>
       <p className='mt-3'>Lorem ipsum dolor <br /> sit amet, consecte <br /> adipiscing elit. Proin <br /> tristique elit nec. <br /> lorem ipsum</p>
     </div>
   </div>
 </div>
</div>
  );
}
export default Blog;

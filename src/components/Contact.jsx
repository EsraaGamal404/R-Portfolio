function Contact(){
  return(
  <div className="container mt-20 bg-slate-200 max-w-full pt-8">
  <h1 className="text-center font-bold text-5xl">Contact</h1>
  <div className="wrapper flex justify-center mt-10 gap-6 flex-wrap ">
           <div className="form">
             <h3 className='font-bold text-xl'>Send Me Message</h3>
             <form className='mt-3'>
               <input className='bg-zinc-800 p-2 rounded' type="email" name="email" id="email" placeholder="Email" required></input>
               <input className='bg-zinc-800 p-2 ml-3 rounded' type="text" name="name" id="name" placeholder="name" required ></input>
               <textarea className='block bg-zinc-800 p-3 w-full h-full mt-5 rounded' name="message" id="message" placeholder="message"></textarea>
               <input className='bg-white p-3 rounded font-bold block ml-auto mt-3 text-xl' type="submit" value="Send"/>
             </form>
           </div>
          <div className="social">
          <h4 className='font-bold text-xl'>Social Media</h4>
         <a className='flex gap-2' href="#index.html">
         <img className='w-6' src={require('../components/whatsapp.png')} alt="" />
          089522237438
         </a>
        <a className='flex gap-2' href="#index.html">
        <img className='w-6' src={require('../components/instagram.png')} alt="" />
      satriawan.ridho
     </a>
   <a className='flex gap-2' href="#index.html">
   <img className='w-6' src={require('../components/facebook.png')} alt="" />
     Ridho.Satriawan
   </a>
   <a className='flex gap-2' href="#index.html">
   <img className='w-6' src={require('../components/linkedin.png')} alt="" />
     Ridho.Satriawan
   </a>
   <a className='flex gap-2' href="#index.html">
   <img className='w-6' src={require('../components/github.webp')} alt="" />
     ridhosatriawan
   </a>
   </div>
  </div>
  <div className='bg-zinc-800 mt-2'>
    <p className='text-center text-white text-xl max-w-full'>@RidhoSatriawan</p>
  </div>
  </div>
  );
}
export default Contact;

function Header() {
  return (
    <header className="bg-zinc-800">
      <div className="container flex justify-around items-center p-5 0 m-auto">
        <a className="font-bold text-4xl text-white" href="index.html">R</a>
        <nav>
          <ul className="md:flex gap-7">
            <li>
              <a className="text-white font-medium text-xl" href="#index.html">Home</a>
            </li>
            <li>
       <a className="text-white font-medium text-xl" href="#About">About</a>
         </li>
         <li>
   <a className="text-white font-medium text-xl" href="#index.html">Services</a>
 </li>
 <li>
   <a className="text-white font-medium text-xl" href="#index.html">Blog</a>
 </li>
 <li>
   <a className="text-white font-medium text-xl" href="#index.html">Contact</a>
 </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;

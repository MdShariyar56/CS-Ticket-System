import React from 'react';

const App = () => {
  return (
    
    
      <>
{/* <div className="navbar d-flex justify-center items-center bg-base-100 shadow-sm max-w-[1200px] max-auto">
  <div className=" ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  
  <div className="">
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
    <a className="btn btn-primary">+ New Ticket</a>
  </div>
</div> */}

<div class="navbar bg-base-100 shadow-sm flex justify-around items-center">
  <div>
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div>
    <ul class="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      <li><a className="btn btn-primary ">+ New Ticket</a></li>
    </ul>
  </div>
</div>

     </>
    
  );
};

export default App;
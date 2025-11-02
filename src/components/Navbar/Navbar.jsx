import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navData = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About Us", url: "/about" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Portfolio", url: "/portfolio" },
  { id: 5, name: "Contact", url: "/contact" }
];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navData.map(route=><Link key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between mx-10'>
    <span className='flex' onClick={()=>setOpen(!open)}>
          {
            open ? <X className='md:hidden'></X>: <Menu className='md:hidden'></Menu>
          }
          <ul className={`md:hidden absolute  duration-1000
           ${open ? 'top-8' : '-top-40'}
        bg-amber-200`}>
            {links}
          </ul>
   <h3 className='ml-4'>My Navbar</h3>
    </span>
    <ul className='md:flex hidden'>
        {
      links 
          }
    </ul>
           {/* <ul className='flex'>
{
    navData.map(route =><li className='mr-10'>
        <a href={route.url}>{route.name}</a>
        </li>)
}
           </ul> */}
    
      {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}
            <button>Sign In</button>
         </nav>
    );
};

export default Navbar;
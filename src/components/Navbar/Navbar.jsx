import React from 'react';
import Link from './Link';

const navData = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About Us", url: "/about" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Portfolio", url: "/portfolio" },
  { id: 5, name: "Contact", url: "/contact" }
];


const Navbar = () => {
    return (
        <nav>
    <ul className='flex '>
        {
           
        navData.map(route=><Link key={route.id} route={route}></Link>)
     
      
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
         </nav>
    );
};

export default Navbar;
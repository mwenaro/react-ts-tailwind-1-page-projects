import { NavLink } from 'react-router-dom';
import { navLinks } from '../../constants';

export default function Navbar ()  {
  return (
    <nav className="w-full">
      
        <ul className="w-full flex flex-col sm:flex-row ">
          {
            navLinks.map(({link,label}:{link:string,label:string,icon?:string})=><li>
            <NavLink to={link} className="w-full sm:fit bg-gray-700 sm:bg-inherit my-2 text-white text-center font-medium block py-2 px-4">{label}</NavLink>
          </li>)}
          
         
        </ul>
      
    </nav>
  );
};



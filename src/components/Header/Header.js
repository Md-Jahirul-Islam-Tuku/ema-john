import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
   const { user, logOut } = useContext(AuthContext);
   return (
      <nav className='header'>
         <Link to='/' ><img src={logo} alt="" /></Link>
         <div>
            <NavLink className={({ isActive }) => isActive ? "active" : "inActive"} to="/about">{user?.email}</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : "inActive"} to="/shop">Shop</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : "inActive"} to="/orders">Orders</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : "inActive"} to="/inventory">Inventory</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : "inActive"} to="/about">About</NavLink>
            {  user?.uid ? <Link className='text-white ml-4' onClick={logOut}  to="/">Log Out</Link>:
               <>
                  <NavLink className={({ isActive }) => isActive ? "active" : "inActive"} to="/signup">Sign Up</NavLink>
                  <NavLink className={({ isActive }) => isActive ? "active" : "inActive"} to="/login">Log In</NavLink>
               </>
            }
         </div>
      </nav>
   );
};

export default Header;
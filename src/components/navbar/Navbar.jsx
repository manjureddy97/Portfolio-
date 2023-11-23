import React, { useState } from 'react'
import './navbar.scss'
import { FaBars,FaReact } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { HiX } from "react-icons/hi";



const data =[

    {
        label:'Home',
        to:'/'
    },
    {
        label:'About',
        to:'/about'
    },
    {
        label:'Resume',
        to:'/resume'
    },
    {
        label:'Skills',
        to:'/skills'
    },
    {
        label:'Portfolio',
        to:'/portfolio'
    },
    {
        label:'Contact',
        to:'/contact'
    },
]

function Navbar() {
    const [toggleIcon,setToggleIcon]=useState(false)

    const handleToggleIcon=()=>{
        setToggleIcon(!toggleIcon)
            console.log('Toggle Icon State:', toggleIcon);

         
    }
  return (
    <div>
    <nav className='navbar'>
    <div className='navbar__container'>
    <Link to={'/'} className='navbar__container__logo'>
    <FaReact size={30}/>
    </Link>
    </div>
    <ul className={`navbar__container__menu ${toggleIcon}?'active' ' ' `}>
    {
        data.map((item,key)=>(
            <li key= {key} className='navbar__container__menu__item'>
            <Link to={item.to} className='navbar__container__menu__item__links'>
            {item.label}
            </Link>
            </li>
        ))}
    
    </ul>
    <div className={'navbar__nav-icon'} onClick={handleToggleIcon}>
    {
        toggleIcon?<HiX size={30}/>:<FaBars size={30}/>
    }
    </div>
    </nav>
    </div>
  )
}

export default Navbar
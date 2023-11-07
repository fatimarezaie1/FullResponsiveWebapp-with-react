
import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'
import {links} from '../data'
import './navbar.css'
import {FaBars} from 'react-icons/fa6'
import {AiOutlineClose} from 'react-icons/ai'
export default function Navbar(){
    const [isNavShowing, setIsNavShowing]= useState(false);

    return(
        <nav>
            <div to='/' className='container nav_container'>
                <Link className='logo' onClick={()=> setIsNavShowing(false )}>
                    <img  src={'images/logo.png'}/>
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
                    {
                        links.map(({path, name}, index)=>{
                            return(
                                <li key={index}>
                                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}
                                    onClick={()=> setIsNavShowing(prev => !prev)}
                                    >{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className='nav__toggle-btn' onClick={()=> setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ?  <AiOutlineClose /> : <FaBars />
                    }
                </button>
            </div>              
        </nav>
    )
}
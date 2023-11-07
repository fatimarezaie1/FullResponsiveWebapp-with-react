import {FaCrown} from 'react-icons/fa'
import SectionHead from './sectionHead'
import {programs} from '../data'
import Card from '../UI/card'
import {Link} from 'react-router-dom'
import React from 'react'
import {AiFillCaretRight} from 'react-icons/ai'
export default function Programms(){
    return(
       <section className='programs'>
            <div className="container programs_container">
                <SectionHead icon={<FaCrown />} title='programs' />
                
                <div className='program_wrapper'>

                    
                    {
                        programs.map(({id,icon,title,info, path}) => {
                            return (
                                <div className='programs-program card' key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                    <Link to={path} className='btn sm'>Learn More <AiFillCaretRight /></Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
       </section>
    )
}
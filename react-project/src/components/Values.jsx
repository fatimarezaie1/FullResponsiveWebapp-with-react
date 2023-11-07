import React from "react";
import SectionHead from './sectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import  {values}  from "../data";
import Card from "../UI/card"


export default function Values(){
    return(
     <section className='values'>
        <div className="container values_container">
            <div className="values_left">
                <div className="values_image">
                    <img src={'images/products/1.jpg'}/>
                </div>
            </div>
            <div className="values_right">
                <SectionHead icon={<GiCutDiamond />} title='Values' />
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                    Fusce posuere, magna sed pulvinar ultricies. 
                </p>
                <div className="values-wraper">
                    {
                        values.map(({id, icon, title,desc}) =>{
                            return <div key={id} className="card values_value">
                                <span>{icon}</span>
                                <h6>{title}</h6>
                                <small>{desc}</small>
                            </div>
                        })
                    }
                </div>
            </div>   
        </div>
     </section>
    )
}
import React from "react";

import Card from '../UI/card'
export default function Trainer({image,name,job,socials}){
    return(
        <div className='trainer card'>
             <div className="trainer_img">
                <img src={image}  alt={name}  />
             </div>
             <h3>{name}</h3>
             <p>{job}</p>
             <div className="trainer_socials">
                {
                    socials.map(({icon,link} ,index)=>{
                        return <a key={index} href={link} target="_blank" rel="noreffer noopener">{icon}</a>
                    })

        
                }
             </div>
        </div>
    )
}
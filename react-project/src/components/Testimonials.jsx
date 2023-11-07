import {useState} from "react";
import SectionHead from './sectionHead'
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../UI/card'
import{IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'
import {testimonials} from '../data'

export default function Testimonials(){
    const [index , setIndex] = useState(0);
    const {name, quote, job, avatar } = testimonials[index]

    const  preTestimonialHandler = ()=>{
        setIndex(prev => prev-1)
        if(index <= 0)
        setIndex(testimonials.length -1)
    }
    const nextTestimonialHandler = () =>{
        setIndex(prev => prev+1)
        if(index >= testimonials.length-1)
        setIndex(0)
    }
    return(
        <section className="testimonials">
            <div className="container testimonials_container">
                <SectionHead icon={<ImQuotesLeft />}  title='Testimonials' className='testimonials_head'/> 
                <div className="card testimonial">
                    <div className="testimonial_avatar">
                        <img  src={avatar} alt="name"/>
                    </div>
                    <p className="testimonial_quote">{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small className="testimonial_title">{job}</small>
                </div>
                <div className="testimonials_btn-container">
                    <button className="testimonials_btn" onClick={preTestimonialHandler}><IoIosArrowDropleftCircle  /></button>
                    <button className="testimonials_btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle  /></button>

                </div> 

            </div>
        </section>
    )
}
import React from "react";
import SectionHead from "./sectionHead";
import {FaQuestion} from 'react-icons/fa6'
import FAQ from "./FAQ";
import {faqs} from '../data'
export default function FAQs(){
    return(
        <section className="faqs">
            <div className="container faqs_container">
                <SectionHead icon={<FaQuestion />} title='FAQs' />
                <div className="faqs_wrapper">
                    {
                        faqs.map(({id,question,answer}) =>{
                            return <FAQ key={id}  question={question} answer={answer}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
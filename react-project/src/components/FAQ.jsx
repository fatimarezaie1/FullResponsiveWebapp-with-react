import {useState} from "react";
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
export default function FAQ({question, answer}){
    const[isAnswerShowing,setIsAnswerShowing] = useState(false);

    return(
         <article className="faq" onClick={() => setIsAnswerShowing(prev => !prev)}>
            <div >
                <h4>{question}</h4>
                <button className="faq-icon">
                    {isAnswerShowing ? <AiOutlineMinus /> :<AiOutlinePlus />}
                </button>
            </div>
            {isAnswerShowing && <p>{answer}</p>}
         </article>
    )
}
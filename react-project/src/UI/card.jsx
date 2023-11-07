
export default function Card({className, Chlidren}){
    return(
        <article className={`card ${className}`}>
             {Chlidren}
        </article>
    )
}
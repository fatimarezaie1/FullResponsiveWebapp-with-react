
export default function SectionHead({icon, title, className}){
    return(
        <div className={`section_head ${className}`}>
            <span>{icon}</span>
            <h2>{title}</h2>
        </div>
    )
}
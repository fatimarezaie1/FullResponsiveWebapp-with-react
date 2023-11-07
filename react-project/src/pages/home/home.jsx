import './home.css'
import MainHeader from '../../components/MainHeader'
import Programms from '../../components/programms'
import Card from '../../UI/card'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'
export default function Home(){
    return(
        <div>
           <MainHeader />
           <Programms />
            <Values />
            <FAQs/>
            <Testimonials />
        </div>
    )
}
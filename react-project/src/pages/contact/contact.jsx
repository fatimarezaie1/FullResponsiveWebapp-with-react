import './contact.css'
import Header from '../../components/Header'
import {AiTwotoneMail} from 'react-icons/ai'
import {BsMessenger,BsWhatsapp} from 'react-icons/bs'

export default function Contact(){
    return (
        <div>
            <Header title={'Get In Touch'} image={'./images/png/error.png'}>
             Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
            </Header>
            <section className='contact'>
                <div className='container contact_container'>
                    <div className='contact_wrapper'>
                        <a href='mailto:support@egattor' target='_blank' rel='noreferrer noopener'><AiTwotoneMail/></a>
                        <a href='https://m.me/ernest_achiever' target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
                        <a href='https://wa.me/+93786722410' target='_blank' rel='noreferrer noopener'><BsWhatsapp/></a>
                    </div>
                </div>
            </section>
        </div>
    )
}
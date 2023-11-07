import './trainers.css'
import {trainers} from '../../data'
import Header from '../../components/Header'
import Trainer from '../../components/trainer'
import {CiTwitter} from  'react-icons/ci'
import {AiOutlineFacebook ,AiOutlineInstagram ,AiOutlineLinkedin} from 'react-icons/ai'
export default function Trainers(){
    return(
        <div>
            <Header title={'Our Trainers'} image={'./images/png/support.png'}>
                Video provides a powerful way to help you prove your point. When you click Online Video,
                you can paste in the embed code 
            </Header>
            <section className='trainers'>
                <div className='container trainers_container'>
                    {
                        trainers.map(({id,name,image,job,socials}) =>{
                            return <Trainer key={id} image={image} name={name} job={job} socials={
                                [
                                    {icon: <AiOutlineInstagram /> , link: socials[0]},
                                    {icon: <CiTwitter /> , link: socials[1]},
                                    {icon: <AiOutlineFacebook /> , link: socials[2]},
                                    {icon: <AiOutlineLinkedin /> , link: socials[3]}
                                ]
                            }/>
                        })
                    }
                </div>
            </section>

        </div>
    )
}
import './gallery.css'
import Header from '../../components/Header'
import  {gallery} from '../../data'
export default function Gallery(){
    
    return (
        <div>
            <Header title={'Our Gallery'} image={'./images/photos/15.jpg'}>
                Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add
            </Header>
            <section className='gallery'>
                <div className='container gallery_container '>
                    {
                        gallery.map( item => {
                            return <article>
                                <img  src={item.img}/>
                            </article>
                        })
                    }
                </div>
            </section>
        </div>
    )
}
import './about.css'
import Header from '../../components/Header'
export default function About(){
    return(
        <div>
            <Header title={'About Us'} image={'./images/media/blog10.jpg'}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas 
            porttitor congue massa. Fusce posuere, 
            </Header>
            <section className='about_story'>
                <div className='container about_story_container'>
                    <div className='about_section_image'>
                        <img src={'./images/photos/1.jpg'} alt='out story image'/>
                    </div>
                    <div className='about_section_content'>
                        <h1>Our Story</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                            sit amet commodo magna eros quis urna.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                            sit amet commodo magna eros quis urna.
                        </p>
                    </div>
                </div>
            </section>

            {/* ------------------Vision---------------*/}
            <section className='about_Vision'>
                <div className='container about_Vision_container'> 
                    <div className='about_section_content'>
                        <h1>Our Vision</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                            sit amet commodo magna eros quis urna.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                            sit amet commodo magna eros quis urna.
                        </p>
                    </div>
                    <div className='about_section_image'>
                        <img src={'./images/photos/9.jpg'} alt='out story image'/>
                    </div>
                </div>
            </section>

            {/* ------------------Mission---------------*/}
            <section className='about_mission'>
                <div className='container about_mission_container'> 

                    <div className='about_section_image'>
                        <img src={'./images/photos/12.jpg'} alt='out story image'/>
                    </div>
                    <div className='about_section_content'>
                        <h1>Our Mission</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                            sit amet commodo magna eros quis urna.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                            sit amet commodo magna eros quis urna.
                        </p>
                    </div>
                   
                </div>
            </section>
    
        </div>
    )
}
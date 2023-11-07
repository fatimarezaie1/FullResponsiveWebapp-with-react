import './plans.css'
import {plans, values} from '../../data'
import Header from '../../components/Header'

export default function Plans(){
    return(
        <div>
            <Header title={'MemberShip Planse'} image={'./images/photos/9.jpg'}>
                 Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add
            </Header>
            <section>
                <div className='container plans_container'>
                    {
                        plans.map(({id,name, desc, price, features})=>{
                            return <div className='plan card'>
                                <h3>{name}</h3>
                                <small>{desc}</small>
                                <h1>{`$ ${price}`}</h1><h2>/mo</h2>
                                <h4>features</h4>
                                {
                                    features.map(({feature, available},index) =>{
                                        return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                                    })
                                }
                                <button className='btn lg'>Choose Plane  </button>
                            </div>
                        })
                    }
                </div>
            </section>
        </div>
    )
}
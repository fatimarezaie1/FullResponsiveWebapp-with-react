import React from "react";
import '../pages/home/home.css'

import { Link } from "react-router-dom";
export default function MainHeader(){
    return(
        <header className="main_header">
            <div className="container main_header_container">
                <div className="main_header-left">
                    <h4>H100 days of Warkwork</h4>
                    <h1>Join The legends of the fitness world</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
                        purus lectus malesuada libero.
                    </p>
                    <Link to='/plans' className="btn lg">Get Started</Link>
                </div>
                <div className="main_header-right">
                    <div className="main__header-circle"></div>
                    <div className="main_header-img">
                        <img src={'images/users/3.jpg'} alt="main header image   " />
                    </div>
                </div>
            </div>
        </header>
    )
}
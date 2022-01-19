import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
    return (
    <div>   
        <h1 className="landingtitle">GAMEROOM</h1>
        <div className="cards">
        <div className="card content">
            <div className="card-content">
            <div className="card-img">
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Gamer"/>
            </div>
            <div className="card-label">E-Sports</div>
            <div className="card-title">
                Fnatic raises $19 million, shakes up leadership team
            </div>
            </div>
        </div>
        <div className="card content">
            <div className="card-content">
            <div className="card-img">
                <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="keyboard"/>
            </div>
            <div className="card-label">
                Technology
            </div>
            <div className="card-title">
                Google Stadia: The Future of Gaming
            </div>
            </div>
        </div>
        <div className="card content">
            <div className="card-content">
            <div className="card-img">
                <img src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80" alt="Controller"/>
            </div>
            <div className="card-label">
                Consoles
            </div>
            <div className="card-title">
                PS5 won't launch before mid-2020
            </div>
            </div>
        </div>
        <div className="card form">
            <Link to="/home" >
                <div className="form-title"> home </div>
            </Link>
        </div>
        </div>


    </div>
    )
}

export default Landing

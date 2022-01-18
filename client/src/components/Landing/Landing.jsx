import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
    return (
    <div>
        <div className="tariffCards">
            <div className="economy">
                <Link to="/home" style={{textDecoration: 'none', color: '#fff'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Home_icon_black.png" alt="Economy" height="54" />
                    <h3>Start</h3>
                    <span>Take me home</span>
                </Link>
            </div>
            <div className="premiumeconomy">
                <a href="https://github.com/TomasLaus" style={{textDecoration: 'none', color: '#fff'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Premium Economy" height={54} />
                    <h3>GitHub</h3>
                    <span>@TomasLaus</span>
                </a>
            </div>
            <div className="first">                
                <a href="https://www.linkedin.com/in/tomaslaus" style={{textDecoration: 'none', color: '#fff'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="First" height="54" />
                    <h3>LinkedIn</h3>
                    <span>https://www.linkedin.com/in/tomaslaus</span>
                </a>
            </div>
            <div className="business">
                <a href="https://tomaslaus.vercel.app/" style={{textDecoration: 'none', color: '#fff'}}>
                    <img src="https://cdn-icons.flaticon.com/png/512/951/premium/951876.png?token=exp=1642480131~hmac=6871aa92d294cb09fcb30aa67b9c2f07" alt="Business" height="54" />
                    <h3>Portfolio</h3>
                    <span>https://tomaslaus.vercel.app/</span>
                </a>
            </div>
        </div>


    </div>
    )
}

export default Landing

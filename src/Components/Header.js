import React from 'react';
import './Header.css';
function Header() {
    return (
        <div>
            <div className="header">
                <a href="#" className="logo">Jad<i class="fas fa-infinity" /></a>
                <div className="header-right">
                    <a href="#"> Destination</a>
                    <a href="#"> Hotel</a>
                    <a href="#"> Flight</a>
                    <a href="#">  Booking</a>
                    <a href="#">  Login</a>
                    <a href="#">  <button>Sign Up</button></a>
                    <a href="#">  EN<i class="fas fa-angle-down" /></a>

                </div>
            </div>
            <div className="image-part">
                <div className="headings">
                    <h4>Best Destition around the world</h4>
                    <h1>Travel,enjoy,and live a new and full life</h1>
                    <p>lorem Login jhbfvh hbfi iiuweff uieilfb iueeifne  iuiuwe uliuhweife  ugiuke fiugfujf hefjb ifflbf </p>
                    <div className="icons">
                        <div> <button className="btn">Find out more</button></div>
                        <div className="circle">
                            <i className="fas fa-play-circle" />
                            <p className="Demo">play Demo </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://wallpaper.dog/large/10708245.jpg" style={{ "width": "60rem", "height": "25rem" }} />
                </div>
                <div>
                </div>
            </div>
        </div>


    )
}
export default Header;
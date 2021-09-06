import React from 'react';
import './Footer.css'
function Footer() {
    return (
        <div className="topnav">
            <div className="mango">
                <img src="https://images.all-free-download.com/images/graphiclarge/axon_airlines_103415.jpg" className="name" style={{ "width": "8rem" }} />
                <img src="https://cdn.ek.aero/in/english/images/Jetstar_tcm288-1507805.png" className="name" style={{ "width": "8rem" }} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6HJpqiPz3jxalko7EXUhmxWDqEsw7IdskA&usqp=CAU" className="name" style={{ "width": "8rem" }} />
                <img src="https://cdn.ek.aero/english/images/Qantas_Airways_tcm233-1130642.png" className="name" style={{ "width": "8rem" }} />
                <img src="https://sparefare.net/assets/fareex/img/nomenclatures/alitalia.png" className="name" style={{ "width": "8rem" }} />
            </div>

            <div><i class="fas fa-location-arrow"></i> </div>
            <div className="corners1">
                <h2 className="bold"><b>Subscribe ro ge infomation,latest news othe interesting affers to othr cobham</b></h2>
                <form className="action">
                    <input type="text" placeholder="Search.." className="search" />
                    <button type="submit" className="BTN">Subscribe</button>

                </form>
            </div>


            <div className='paren1'>
                <div className="chil1">
                    <h1 className="name1">Jsddoo</h1>
                    <p> back your trip inget full control for much longer</p>
                </div>
                <div className="nav__item">
                    <h2 class="nav__title"><b>Company</b></h2>
                    <ul class="nav__ul">
                        <li>
                            <a href="#">About</a>
                        </li>

                        <li>
                            <a href="#">Carrier</a>
                        </li>

                        <li>
                            <a href="#">Mobile</a>
                        </li>
                    </ul>
                </div>
                <div className="nav__item">
                    <h2 class="nav__title"><b>Contact</b></h2>


                    <ul class="nav__ul">
                        <li>
                            <a href="#">Help/FAQ</a>
                        </li>

                        <li>
                            <a href="#">press</a>
                        </li>

                        <li>
                            <a href="#">Allitireas</a>
                        </li>
                    </ul>
                </div>
                <div className="nav__item">
                    <h2 class="nav__title"><b>more</b></h2>


                    <ul class="nav__ul">
                        <li>
                            <a href="#">Airline fees</a>
                        </li>

                        <li>
                            <a href="#">Airline</a>
                        </li>

                        <li>
                            <a href="#">Lowfaretips</a>
                        </li>
                    </ul>
                </div>
                <div className="chil5">
                    <ul className="nav__ul-1">
                        <li className='book'>
                            <i class="fab fa-facebook"></i>
                        </li>

                        <li className='book'>
                            <i class="fab fa-instagram"></i>
                        </li>

                        <li className='book'>
                            <i class="fab fa-twitter"></i>
                        </li>
                    </ul>

                    <b>Discover  our apps</b>
                    <div className="playstore"><i class="fab fa-app-store-ios"></i>
                        getgoogleplaystore</div>
                    <div className='applle'> <i class="fab fa-apple"></i>
                        get apple</div>
                </div>
            </div>
        </div>
    )
}
export default Footer
import React from 'react'
import './Cardpath.css';
function Cardpath() {
    return (
        <div>
            <div className="settings"><p className="TOP">Top settings</p>
                <h1>Top Destinations</h1>
            </div>

            <div className="container-fluid d-flex justify-content-center ">
                <div className="row">
                    <div className="card-cam col-md-4 ">
                        <img src="https://cdn.travelpulse.com/images/e5a9edf4-a957-df11-b491-006073e71405/404747c6-03c2-4924-bc0a-e62e7603089f/630x355.jpg" alt="John" className='images' style={{ "width": "18rem", "height": "20rem" }} />
                        <div className="Roman">
                            <p> Roman Itlay</p>
                            <p> $5,42k</p>

                        </div>
                        <div><i class="fas fa-mouse-pointer"></i>10days trip</div>
                    </div>
                    <div className="card-cam col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzS_ExyN6uSv8_BiwMk0kWYybJJ_KzP6rxpNhI1Sw2RqZOI6Mb1VELPzyDBPFLmqnYI-s&usqp=CAU" alt="John" style={{ "width": "18rem", "height": "20rem" }} />
                        <div className="Roman">
                            <p>  Londan,UK</p>
                            <p> $4.2k</p>

                        </div>
                        <div><i class="fas fa-mouse-pointer"></i>10days trip</div>
                    </div>
                    <div className="card-cam col-md-4">
                        <img src="https://cdn.tourradar.com/s3/tour/232x170/1466_5e26e46d71dc8.jpg" alt="John" style={{ "width": "18rem", "height": "20rem" }} />
                        <div className="Roman">
                            <p> FUll Europe</p>
                            <p>  $15k</p>

                        </div>
                        <div><i class="fas fa-mouse-pointer"></i>10days trip</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cardpath;

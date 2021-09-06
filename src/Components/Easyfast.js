import React from 'react';
import './Easyfast.css';
function Easyfast() {
    return (
        <div className="parent">
            <div className='child'>
                <div className="child1">
                    <b>Easy and Fast</b>
                    <h2><p>Book Your Next Trip In 3 Easy Steps </p></h2>
                    <div className="choose">
                        <div className="inform" >
                            <i className="fas fa-vector-square" />
                        </div>
                        <b> choose</b>
                        <p>Lorem ipsum dolor sit amet,conse ctetur</p>
                    </div>
                    <div className="choose">
                        <i class="fas fa-duck"></i>
                        <b> Make Payment</b>
                        <p> Lorem ipsum dolorsit amet consectere </p>
                    </div>
                    <div className="choose">
                        <div className="inform"><i className="fas fa-car"></i></div>
                        <b> Rich airport on selected Date</b>
                        <p>  Lorem ipsum dolor sit amet, consecter</p>
                    </div>
                </div>

                <div className='child2'>

                    <div className="card-social" style={{ "width": "18rem" }}>
                        <div class="card-header">
                            <img src="https://cdn.tourradar.com/s3/tour/232x170/1466_5e26e46d71dc8.jpg" className="imgs" style={{ "width": "16rem" }} />
                            Featured
                            <div className="hello">
                                <p>14-29</p>
                                <p className="br">|br Robin</p>
                            </div>
                            <div className="hai">
                                <div ><i class="far fa-lips"></i></div>
                                <div className='box1'><i class="fas fa-book-open"></i></div>
                                <div className="box"><i class="fas fa-mouse-pointer"></i></div>

                            </div>
                            <div className="love">
                                <div>24people</div>
                                <div> <i class="fas fa-heart"></i></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card-taja">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ622blUSHQvygeIlfPicjh2DyByg9KofZGZIm5TubYr2-5kJzKMGSoBDXbHhBKqzmRP-0&usqp=CAU' className='taj' style={{ 'width': "4rem", "height": "4rem" }} />
                    <div class="container">
                        <h6>ongoing</h6>
                        <b>Trip to</b>
                        <div className='colour'>40%</div>
                        <div> <i class="fas fa-horizontal-rule"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
} export default Easyfast;
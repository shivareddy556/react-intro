import React from 'react';
import './Cards.css';
function Cards() {
    return (
        <div>
            <div className="catagory">
                <h4 className="john">CATEGORY</h4>
                <h1> We OfferBest Service </h1>
            </div>

            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div class="card-boxshadow col-md-3" style={{ "width": "18rem", "height": "20rem" }}>
                        <div className="same">
                            <div className="padding"></div>
                            <i className="fas fa-smog"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">calculate weather</h5>
                            <p class="card-text">Built wicket longer admire to botanvanity it selfdo in it</p>
                        </div>
                    </div>

                    <div class="card-shadow col-md-3" style={{ "width": "18rem", "height": "20rem" }}>
                        <div className="same">
                            <div className="nothing"></div>
                            <i class="fas fa-fighter-jet"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">calculate weather</h5>
                            <p class="card-text">Built wicket longer admire to botanvanity it selfdo in it</p>
                        </div>


                    </div>

                    <div class="card-boxshadow col-md-3" style={{ "width": "18rem", "height": "20rem" }}>
                        <div className="some">
                            <div className="something"></div>
                            <i class="fas fa-microphone-alt"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">calculate weather</h5>
                            <p class="card-text">Built wicket longer admire to botanvanity it selfdo in it</p>
                        </div>
                    </div>
                    <div class="card-boxshadow col-md-3" style={{ "width": "18rem", "height": "20rem" }}>
                        <div className="same">
                            <div className="northing"></div>
                            <i class="fas fa-cog"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">calculate weather</h5>
                            <p class="card-text">Built wicket longer admire to botanvanity it selfdo in it</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Cards;
import React from 'react'
import card1 from "..//../assets/download.jpg";
import dcut from "..//../assets/dcut.jpg";
import wprint from "..//../assets/wprint.jpg";
import dcutN from "..//../assets/dcutN.jpg";
import loopcut from "..//../assets/loopcut.jpg";
import ploop from "..//../assets/ploop.jpg";
import stiched from "..//../assets/stiched.jpg";
import giftbag from "..//../assets/giftbag.jpg";
import sheet from "..//../assets/sheet.jpg";
import best from "..//../assets/best.png";
import bestprice from "..//../assets/bestprice.jpg";
import fast from "..//../assets/fast.jpg";
import time from "..//../assets/time.jpg";

// import carousel_img1 from "..//../assets/wcutimgCau.jpg";
// import carousel_img2 from "..//../assets/giftbag.jpg";
// import carousel_img3 from "..//../assets/loopcut.jpg";

import allbags from "..//../assets/allbags.jpg";

import { Link } from 'react-router-dom';
import "./Home.css"

function Home() {
    return (
        <>
            <div className='homeBack'>
                {/* <div className='firstPart'>
                    <div className="carosusel_section">
                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active cauroImg1">
                                    <img
                                        src={carousel_img1}
                                        className="d-block carosusel_section"
                                        alt="carousel img 1"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src={carousel_img2}
                                        className="d-block carosusel_section"
                                        alt="carousel img 2"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src={carousel_img3}
                                        className="d-block carosusel_section"
                                        alt="carousel img 3"
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div> */}
                <div className='firstPart'>
                    <div className='leftTxt'>
                        <h1>Trasforming Custom Printings with Non Woven Bags</h1>
                        <p>At <span style={{fontWeight: 'bold'}}> SV_EnterPrises</span>, we provide custom printings acording to creative designs with Non Woven Bags, By choosing non-woven bags, you’re not just building a business—you’re contributing to a cleaner, greener future for generations to come.</p>
                       <Link to="/contact"><button>Contact Us</button></Link>
                    </div>
                    <div className='rightImg'>
                        <img src={allbags} alt='firstImg' className='firstImg'/>
                    </div>
                </div>
                <div className='ourProducts'>
                    <h2>Our Products</h2>
                    <div className='boxContainers'>
                        <Link to="/wCutBag" className='linkLines'><div class="card" className='BagCards'>
                            <img class="card-img-top" src={card1} alt="Card image cap" className='cardImg' />
                            <div class="card-body">
                                <h5 class="card-title">W Cut Non Woven Bags</h5>
                            </div>
                        </div>
                        </Link>
                        <Link to="/pCutBag" className='linkLines'><div class="card" className='BagCards'>
                            <img class="card-img-top" src={wprint} alt="Card image cap" className='cardImg' />
                            <div class="card-body">
                                <h5 class="card-title">Printed W Cut Non Woven Bags</h5>
                            </div>
                        </div>
                        </Link>
                        <Link to="/dCutBag" className='linkLines'><div class="card" className='BagCards'>
                            <img class="card-img-top" src={dcutN} alt="Card image cap" className='cardImg' />
                            <div class="card-body">
                                <h5 class="card-title">D Cut Non Woven Bags</h5>
                            </div>
                        </div>
                        </Link>
                        <Link to="/pdcutBag" className='linkLines'><div class="card" className='BagCards'>
                            <img class="card-img-top" src={dcut} alt="Card image cap" className='cardImgD' />
                            <div class="card-body">
                                <h5 class="card-title">Printed D Cut Non Woven Bags</h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className='boxContainers'>
                        <Link to="/loopcut" className='linkLines'><div class="card" className='BagCards'>
                            <img class="card-img-top" src={loopcut} alt="Card image cap" className='cardImg' />
                            <div class="card-body">
                                <h5 class="card-title">Loop Cut Non Woven Bags</h5>
                            </div>
                        </div>
                        </Link>
                        <Link to="/ploopcut" className='linkLines'><div class="card" className='BagCards'>
                            <img class="card-img-top" src={ploop} alt="Card image cap" className='cardImgD' />
                            <div class="card-body">
                                <h5 class="card-title">Printed Loop Cut Non Woven Bags</h5>
                            </div>
                        </div>
                        </Link>
                        <Link to="/stichedBag" className='linkLines'><div class="card" className='BagCards'>
                            <img class="card-img-top" src={stiched} alt="Card image cap" className='cardImg' />
                            <div class="card-body">
                                <h5 class="card-title">Non Woven Stitched Handle Bags</h5>
                            </div>
                        </div>
                        </Link>
                        <Link to="/returnBag" className='linkLines'><div class="card" className='BagCards'>
                            <img class="card-img-top" src={giftbag} alt="Card image cap" className='cardImg' />
                            <div class="card-body">
                                <h5 class="card-title">Return Gift/ Thanks giving bags</h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='whyChoose'>
                    <div className='imgCloth'>
                        <img src={sheet} className='sheetImg' alt='sheetimg' />
                    </div>
                    <div className='textBox'>
                        <h2>Why Choose Us</h2>
                        <p>SV_Enterprises is engaged as a Manufacturer, Wholesaler, and Trader of a comprehensive range of Non-Woven Bag and Printing. Our products are enormously admired due to their exclusive designs, low maintenance, numerous sizes, and high strength. Besides, our products are made by a well-informed expert team who has years of practice in this realm. Our team works in close synchronization with each other to attain the trade objectives within the stipulated time frame.</p>
                        <div className='sub-items'>
                            <div className='item1'>
                                <img src={best} alt='best' className='item-logo' />
                                <p>Best Quality</p>
                            </div>
                            <div className='item1'>
                                <img src={bestprice} alt='best' className='item-logo' />
                                <p>Best Price</p>
                            </div>
                        </div>
                        <div className='sub-items'>
                            <div className='item1'>
                                <img src={fast} alt='best' className='item-logo' />
                                <p>Fast Delivery</p>
                            </div>
                            <div className='item1'>
                                <img src={time} alt='best' className='item-logo' />
                                <p>24/7 Service</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lastPage'>
                    <div className='itemfinal'>
                        <img src={best} alt='best' className='item-logo' />
                        <p style={{ fontSize: '15px', fontWeight: 550 }}>Best Quality</p>
                        <p>Searching for the best quality product in the market at the most competitive price, please don’t hesitate to contact us.</p>
                    </div>
                    <div className='itemfinal'>
                        <img src={bestprice} alt='best' className='item-logo' />
                        <p style={{ fontSize: '15px', fontWeight: 550 }}>Best Price</p>
                        <p>Buy from SV_Enterprises. We guarantee you that we have the lowest prices that you’ll find anywhere on the Internet & market.</p>
                    </div>
                    <div className='itemfinal'>
                        <img src={fast} alt='best' className='item-logo' />
                        <p style={{ fontSize: '15px', fontWeight: 550 }}>Fast Delivery</p>
                        <p>Express shipping is fast, secure, and tracking, so you can get your items quickly without having any problems.</p>
                    </div>
                    <div className='itemfinal'>
                        <img src={time} alt='best' className='item-logo' />
                        <p style={{ fontSize: '15px', fontWeight: 550 }}>24/7 Service</p>
                        <p>Our 24/7 support team is available for you, We are committed to ensuring your questions are answered and issues are resolved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
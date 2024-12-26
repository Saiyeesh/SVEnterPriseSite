import "./AboutUs.css"
import download from "../../assets/download.jpg"
import download2 from "../../assets/download2.jpg"
import download3 from "../../assets/download3.jpg"
import download5 from "../../assets/download5.jpg"
import download4 from "../../assets/download4.jpg"
import download6 from "../../assets/download6.jpg"

function AboutUs() {
    return (
        <>
            <div className="main">
                <div className="a">
                    <div>
                        <h2 className="header">SV_Enterprises</h2>
                        <p className="b">Established in the year <b>2013</b>, we <b>Satnam Overseas</b> are engaged in <b>Manufacturer, Wholesaler and Trader</b> a comprehensive range of <b>Non Woven Shopping Bag, D Cut Non Woven Bag, Non Woven Carry Bag, U Cut Non Woven Bag, W Cut Non Woven Carry Bag, Non Woven Loop Handle Bag</b>. Our products are enormously admired due to their exclusive designs, low maintenance, numerous sizes and high strength. Besides, our products are made by well-informed expert’s team who has years of practice of this realm. Our team works in close synchronization to each other to attain the trade objectives within stipulated time frame.</p>
                        <p className="b">We work under the leadership of our knowledgeable mentor Mr. Himanshu Nankani. Moreover, his profoundly domain expertise and sharp industry acquaintance help in manufacturing products that are in accordance with customers’ exact necessities. </p>
                    </div>
                    <div>
                        <img className="img1" src={download} alt="" />
                    </div>
                </div>
                <div className="a">
                    <div>
                        <img className="img2" src={download2} alt="" />
                    </div>
                    <div>
                        <h2 className="header1">Whay Choose Us</h2>
                        <p className="c">Satnam Overseas is engaged as a Manufacturer, Wholesaler, and Trader of a comprehensive range of Non-Woven Bag and Non-Woven fabrics. Our products are enormously admired due to their exclusive designs, low maintenance, numerous sizes, and high strength. Besides, our products are made by a well-informed expert team who has years of practice in this realm. Our team works in close synchronization with each other to attain the trade objectives within the stipulated time frame.</p>
                        <div className="d">
                            <div>
                                <img className="img3" src={download3} alt="" />
                                <p className="para">Quality Control</p>
                            </div>
                            <div>
                                <img className="img3" src={download5} alt="" />
                                <p className="para">Original Product</p>
                            </div>
                         </div>   
                            <div className="d">
                                <div>
                                    <img className="img3" src={download4} alt="" />
                                    <p className="para">Quality Control</p>
                                </div>
                                <div>
                                    <img className="img3" src={download6} alt="" />
                                    <p className="para">Original Product</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aa">
                            <div>
                                <h1 className="header3">Non Woven Bags Manufecture</h1>
                                <p className="g">Our team works in close synchronization to each other to attain the trade objectives within stipulated time frame.</p>
                            </div>
                            <button type="button">WHATSAPP US</button>
                        </div>
                </div>

        </>
    )
}

export default AboutUs


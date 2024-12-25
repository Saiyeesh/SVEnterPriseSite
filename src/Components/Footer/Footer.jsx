import "./Footer.css"
import log from "..//../assets/logo.png";
import { TbMapSearch } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <>
     <div className='footerBack'>
        <div className='footerAllParts'>
            <div className='footerFirstPart'>
                <div className='first'>
                    <img src={log} className="firstLogo"/>
                    <h5>SV_Enterprises___</h5>
                    <p>SV Enterprises is engaged as a Manufacturer, Wholesaler, and Trader of a comprehensive range of Non-Woven Bag and Printings.</p>
                </div>
            </div>
            <div className="footerSecoundPart">
                <h4>Social Media</h4>
                <ul className="footerUls">
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Phone</li>
                    <li>FaceBook</li>
                </ul>
            </div>
            <div className="footerThirdPart">
                <h4>Contact Us</h4>
                <div className="allTxt">
                    <div className="logoIcons">
                        <TbMapSearch className="logg"/>
                        <p>Kothagadi, Vikarabad</p>
                    </div>
                    <div className="logoIcons">
                        <FaPhone className="logg"/>
                        <p>+91 85229 79159</p>
                    </div>
                    <div className="logoIcons">
                        <IoMdMail className="logg"/>
                        <p>bablu@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Footer

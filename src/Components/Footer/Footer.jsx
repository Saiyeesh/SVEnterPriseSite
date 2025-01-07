import "./Footer.css"
import log from "..//../assets/svlogo.jpg";
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
                    <a href="https://www.instagram.com/sv_enterprises___/" target="_blank" className="flinks"><li>Instagram</li></a>
                    <a href="https://www.whatsapp.com/catalog/919963265472/?app_absent=0" target="_blank" className="flinks"> <li>WhatsApp</li></a>
                    <a href="" className="flinks"><li>Phone</li></a>
                    <a href="" className="flinks"><li>FaceBook</li></a>
                </ul>
            </div>
            <div className="footerThirdPart">
                <h4>Contact Us</h4>
                <div className="allTxt">
                    <div className="logoIcons">
                        <TbMapSearch className="logg1"/>
                        <p>H-NO. 7, 1-69/1, near Hanuman Temple, Vikarabad, Kothagadi, Telangana 501101</p>
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

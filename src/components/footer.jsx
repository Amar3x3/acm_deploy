import React from "react";
import { Link } from "react-router-dom";
import '../styles/main.css'
const Footer = () => {
    return<>
        <footer>
        <div className="mega-grid-2-abt">
            <div className="socials-cont col-2 footer-items">
                
                    <Link className="mg-btm-1" to='https://www.instagram.com/pvg_acm/'>Instagram</Link>
                    <Link className="mg-btm-1" to='https://www.linkedin.com/company/pvgcoet-acm-student-chapter'>LinkedIn</Link>
                    <Link className="mg-btm-1" to='https://www.acm.org/'>Acm Offical Wbsite</Link>
                
            </div>
            <div className="legal-cont col-2 footer-items">
                <a className="mg-btm-1" href="mailto:chatep@acm.org">For Enquiries</a>
                <a className="mg-btm-1" href="mailto:">For Complaints</a>
                <a className="mg-btm-1" href="https://www.acm.org/privacy-policy">Privacy Policy</a>
            </div>
            <div className="address-cont col-2 footer-items">
                <div>
                    Pune Vidhyarthi Grihas College Of Engineering And Technology & G. K. Pate (Wani) Institute of Management
                    44, Vidya Nagari, Shiv Darshan Rd, Parvati,
                    Pune, Maharashtra 411009
                </div>
            </div>
        </div>
        </footer>
    </>
}
export default Footer;
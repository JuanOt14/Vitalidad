import './Footer.css'

//import assets
import logo from '../assets/logo.png'
import { FacebookFill, InstagramFill, WhatsappFill } from 'akar-icons'

export default function Footer () {
    return (
        <footer className="footer">
            <div className="footer-info">
                <p>
                    <b>Email:</b> contacto@vitalidad.com <br />
                    <b>Telefono:</b> 1234567890 <br />
                </p>
            </div>
            <div className='footer-image'>
                <img src={logo} alt="logo" />
            </div>
            <div className='footer-social'>
                <FacebookFill strokeWidth={2} size={36} />
                <InstagramFill strokeWidth={2} size={36} />
                <WhatsappFill strokeWidth={2} size={36} />
            </div>
        </footer>
    )
}
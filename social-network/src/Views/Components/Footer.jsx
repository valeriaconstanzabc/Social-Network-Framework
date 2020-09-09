import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="logoFooter">
                <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/Logo.png" alt="logo-lofche" className="imgFooter"/>
            </div>
            <div className="copyright">
                <p>© Copyright by Lofche | 2020.</p>
            </div>
            <div className="containerSocialMedia">
                <div className="social-media">
                    <a target="blank" href="https://www.facebook.com/">
                        <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/facebook.png" alt="facebook" className="socialMedia1"/>
                    </a>
                </div>
                <div className="social-media">
                    <a target="blank" href="https://www.instagram.com/">
                        <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/instagram.png" alt="instagram" className="socialMedia2"/>
                    </a>
                </div>
                <div className="social-media">
                    <a target="blank" href="https://twitter.com/">
                        <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/twitter.png" alt="twitter" className="socialMedia3"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer

import React from 'react';
import styles from '../styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="line"></div>
            <section className="pre-footer">
                <p className="first-text text-footer">
                    Texto de TEST
                </p>
                <p className="second-text text">

                </p>
                <p className="third-text text">

                </p>
                <div className="just-a-div text">
            
                </div>
            </section>
            <div className="line"></div>

            <section className="footer">
                <div className="first-container">
                    <div className="left-panel">
                        
                    </div>
                    <div className="right-panel">
                        <div className="first-column">
                            <p className="first-column-title">Contacto</p>
                        </div>
                    </div>
                </div>
                <div className="second-container">

                </div>

            </section>
        </footer>
    );
}

export default Footer;
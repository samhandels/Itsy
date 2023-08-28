import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">

            {/* Renewable energy section */}
            <div className="renewable-energy-section">
                <div id="renewable-energy-section">Itsy is powered by 100% renewable electricity.</div>
            </div>

            {/* Who we are section */}
            <div className="team-section">
                <div className="team-members">
                    <div className="team-member">
                        <img className='member-image' src="https://media.licdn.com/dms/image/C4E03AQHw8P2euo3WZQ/profile-displayphoto-shrink_200_200/0/1517638025526?e=1698883200&v=beta&t=lnYjzvYCaP07-P7VWIQKpe-kwv-p3pCzFJhImAhd2fs" alt="Team Member 1" />
                        <div className='member-name' >Aila</div>
                    </div>
                    <div className='who-we-are'>WHO</div>
                    <div className="team-member">
                        <img className='member-image' src="https://media.licdn.com/dms/image/C4D03AQFtc-pVwmDnEA/profile-displayphoto-shrink_200_200/0/1604125040371?e=1698883200&v=beta&t=hqwEc_8bV5b3XfhXlBlttQoiGcn9hyuv6bcTH9624T4" alt="Team Member 2" />
                        <div className='member-name' >Juvenal</div>
                    </div>
                    <div className='who-we-are'>WE</div>
                    <div className="team-member">
                        <img className='member-image' src="https://media.licdn.com/dms/image/C5603AQF0GSgWR49DHw/profile-displayphoto-shrink_200_200/0/1568408227822?e=1698883200&v=beta&t=lqj5Bb0FKkdi2f-MsDgd8aVbgyfvPwg8kiMSLp1N4Mg" alt="Team Member 3" />
                        <div className='member-name' >Sam</div>
                    </div>
                    <div className='who-we-are'>ARE</div>
                    <div className="team-member">
                        <img className='member-image' src="https://media.licdn.com/dms/image/D4E03AQExbSO-orZanQ/profile-displayphoto-shrink_200_200/0/1693175484136?e=1698883200&v=beta&t=WTw5NNcWTcE_n7hmuwTnahMyQRDSwNS1r1dHJsxXHL8" alt="Team Member 4" />
                        <div className='member-name' >Erica</div>
                    </div>
                </div>
            </div>

            {/* Bottom links section */}
            <div className="bottom-links">
                <div> © 2023 Itsy</div>
                <div className="links">
                    <a href="/terms">Terms & Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

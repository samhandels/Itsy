import React from 'react';
import './Footer.css';
import githubLogo from './github.png';
import linkedinLogo from './linkedin.png'
import redux_icon from './redux_icon.png';
import flask_icon from './flask_icon.png';

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
                        <img className='member-image' src="https://media.licdn.com/dms/image/D5635AQHBzC9zFBnuvA/profile-framedphoto-shrink_800_800/0/1702753344206?e=1703700000&v=beta&t=9E1D4SOUE9sUrBxmFabgmnA41UljqdsBt_qcgYtICfg" alt="Team Member 1" />
                        <div className='member-name' >Aila Lu</div>
                        <div>
                            <a href="https://www.linkedin.com/in/ailalutw/" target="_blank" rel="noopener noreferrer">
                                <img className='linkedin-logo' src={linkedinLogo} alt="linkedin"/>
                            </a>
                            <a href="https://github.com/AilaLu" target="_blank" rel="noopener noreferrer">
                                <img className='github-logo' src={githubLogo} alt="GitHub" />
                            </a>
                        </div>
                    </div>

                    <div id='who-footer'>
                        <div id='who' className='who-we-are'>WHO</div>
                        <div className='tech1'>Python<br/>Flask<br/>SQLAlchemy</div>
                    </div>

                    <div className="team-member">
                        <img className='member-image' src="https://media.licdn.com/dms/image/D4D35AQG5hxVDtX4fwQ/profile-framedphoto-shrink_800_800/0/1695923599058?e=1703358000&v=beta&t=vzXPyO2Dqy8yHrGuEy2Pq4tcVKfHWlxaRplQW86yy4Y" alt="Team Member 2" />
                        <div className='member-name' >Juvenal Burguillos</div>
                            <a href="https://www.linkedin.com/in/juvenal-burguillos-b550041ba/" target="_blank" rel="noopener noreferrer">
                                <img className='linkedin-logo' src={linkedinLogo} alt="linkedin"/>
                            </a>
                            <a href="https://github.com/juvie3" target="_blank" rel="noopener noreferrer">
                                <img className='github-logo' src={githubLogo} alt="GitHub" />
                            </a>
                    </div>

                    <div id='we-footer'>
                        <div id='we' className='who-we-are'>WE</div>
                        <div className='tech2'>JS<br/>HTML<br/>CSS</div>
                    </div>

                    <div className="team-member">
                        <img className='member-image' src="https://media.licdn.com/dms/image/D5635AQFka-oIHsLiwQ/profile-framedphoto-shrink_800_800/0/1695923438445?e=1703358000&v=beta&t=MhChKFxKGGbT5zNVpadYm-XaIFVNKOlaOAJrw-SCotc" alt="Team Member 3" />
                        <div className='member-name' >Sam Handelsman</div>
                            <a href="https://www.linkedin.com/in/sam-handelsman/" target="_blank" rel="noopener noreferrer">
                                <img className='linkedin-logo' src={linkedinLogo} alt="linkedin"/>
                            </a>
                            <a href="https://github.com/samhandels" target="_blank" rel="noopener noreferrer">
                                <img className='github-logo' src={githubLogo} alt="GitHub" />
                            </a>
                    </div>

                    <div id='are-footer'>
                        <div id='are' className='who-we-are'>ARE</div>
                        <div className='tech3'>React<br/>Redux<br/>PostgreSQL</div>
                    </div>

                    <div className="team-member">
                        <img className='member-image' src="https://media.licdn.com/dms/image/D4E03AQExbSO-orZanQ/profile-displayphoto-shrink_800_800/0/1693175484469?e=1707955200&v=beta&t=IHvXNzRwWeLmyrJRrHY43et84JUjYjpjuDIqM-fxYEE" alt="Team Member 4" />
                        <div className='member-name' >Erica Zimmerman</div>
                            <a href="https://www.linkedin.com/in/erica-zimmerman-15168a28a/" target="_blank" rel="noopener noreferrer">
                                <img className='linkedin-logo' src={linkedinLogo} alt="linkedin"/>
                            </a>
                            <a href="https://github.com/ez111640" target="_blank" rel="noopener noreferrer">
                                <img className='github-logo' src={githubLogo} alt="GitHub" />
                            </a>
                    </div>
                </div>
            </div>

            {/* Bottom links section */}
            <div className="bottom-links">
                <div> © 2023 Itsy - inspired by Etsy.com</div>
                <div className="links">



                <i class="fa-brands fa-react fa-xl hover-text">
                <span id='topTip' className='tooltip-text'>React</span>
                </i>

                <i className='hover-text-img'>
                <img className="fa-brands-redux-icon hover-text" src={redux_icon}></img>
                <span id='topTip-img' className='tooltip-text-img'>Redux</span>
                </i>

                <i className='hover-text-img'>
                <img className="fa-brands-redux-icon hover-text" src={flask_icon}></img>
                <span id='topTip-img' className='tooltip-text-img'>Flask</span>
                </i>

                <i class="fa-solid fa-database fa-xl hover-text">
                <span id='topTip' className='tooltip-text'>SQLAlchemy</span>
                </i>

                <i class="fa-brands fa-python fa-xl hover-text">
                <span id='topTip' className='tooltip-text'>Python</span>
                </i>

                {/* <i class="fa-solid fa-flask fa-xl hover-text">
                <span id='topTip' className='tooltip-text'>Flask</span>
                </i> */}

                <i class="fa-brands fa-node-js fa-xl hover-text">
                <span id='topTip' className='tooltip-text'>Node</span>
                </i>

                <i class="fa-brands fa-square-js fa-xl hover-text">
                <span id='topTip' className='tooltip-text'>Javascript</span>
                </i>

                <i class="fa-brands fa-html5 fa-xl hover-text">
                <span id='topTip' className='tooltip-text'>HTML5</span>
                </i>

                <i class="fa-brands fa-css3-alt fa-xl hover-text">
                <span id='topTip' className='tooltip-text'>CSS3</span>
                </i>

                {/* <i class="fa-brands fa-aws fa-xl hover-text">
                <span id='topTip' className='tooltip-text'>Amazon</span>
                </i> */}

                <i class="fa-brands fa-git-alt fa-xl hover-text">
                <span id='topTip' className='tooltip-text'>Git</span>
                </i>

                <i class="fa-brands fa-square-github fa-xl hover-text">
                <span id='topTip' className='tooltip-text'>GitHub</span>
                </i>





                    <a href='https://github.com/samhandels/Itsy' target="_blank">GitHub Repo</a>
                    {/* <a>Privacy Policy</a>
                    <a>Contact Us</a> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;

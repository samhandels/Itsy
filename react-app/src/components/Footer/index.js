import React from 'react';
import './Footer.css';

function Footer(){
	return (
		<footer className="footer-container">
			<div>
				<p>© 2023 Itsy</p>
			</div>
			<div>
				<a href="/terms">Terms & Conditions</a>
				<a href="/privacy">Privacy Policy</a>
				<a href="/contact">Contact Us</a>
			</div>
		</footer>
	);
}

export default Footer;

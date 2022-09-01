import './Footer.css';
import github from './images/github.png';
import linkedIn from './images/linkedIn.png';

const Footer = () =>
    <footer >
        <a target='_blank' href='https://github.com/Geerooniimoo'><img src={github} /> </a>
        <a target='_blank' href='https://linkedIn.com/in/GeronimoPerez'><img src={linkedIn} /> </a>
    
    </footer>

export default Footer;
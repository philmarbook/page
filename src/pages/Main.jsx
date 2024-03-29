import React from 'react';
import Home from './tabs/Home'; 
import Books from './tabs/Books';
import Events from './tabs/Events';
import Bio from './tabs/Bio'; 
import Contact from './tabs/Contact'; 
import '../assets/scss/pages/Main.scss';
import { Link } from 'react-scroll';
import philmarImage from '../assets/images/philmar.jpeg';


function Main() {
    return (
        <>
            <header className="header">
                <nav>
                    <ul>
                        <li className="tab"><Link className="nav-link" to="home" smooth={true} duration={500} offset={-50}>Accueil</Link></li>
                        <li className="tab"><Link className="nav-link" to="books" smooth={true} duration={500} offset={-50}>Livres</Link></li>
                        <li className="tab"><Link className="nav-link" to="bio" smooth={true} duration={500} offset={-220}>Bio</Link></li>
                        <li className="tab"><Link className="nav-link" to="events" smooth={true} duration={500} offset={-220}>Évènements</Link></li>
                        <li className="tab"><Link className="nav-link" to="contact" smooth={true} duration={500} offset={-50}>Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <div id="home"><Home/></div>
            <div id="books"><Books /></div>
            <div id='bio-title'>
                <h2>Biographie</h2>
            </div>
            <div id="bio"><Bio
            srcImage={philmarImage}
            /></div>
            <div id='events-title'>
                <h2>Évènements</h2>
            </div>
            <div id="events"><Events /> </div>
            <div id="contact"><Contact /></div>
            

            <footer className="footer">
                <p>© Copyright PhilmarZic All Rights Reserved</p>
            </footer>
        </>
    );
}

export default Main;

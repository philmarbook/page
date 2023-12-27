import React from 'react';
import Home from './tabs/Home'; 
import Books from './tabs/Books';
import Bio from './tabs/Bio'; 
import Events from './tabs/Events'; 
import Contact from './tabs/Contact'; 
import '../assets/scss/pages/Main.scss';
import { Link } from 'react-scroll';

const bioCaption = `	Depuis 40 ans Philmar est musicien et en a fait très vite sa profession. Ayant parcouru les univers musicaux rock, jazz, musiques du monde, il a joué en solo et dans différents groupes, et accompagné d'autres artistes. Multi-instrumentiste et chanteur, il a enregistré des albums et animé des stages sur différentes thématiques et pour différents publics.

Sur la même période de 40 ans Philmar a aussi écrit régulièrement, sans en diffuser les créations hormis par des chansons.
Posant un regard curieux sur le monde et les Humains, et sensible au quotidien et dans ses relations, il a trouvé dans les mots une des formes artistiques lui permettant de transposer et magnifier ces vécus. Philmar a ainsi exprimé dans ses poèmes, ses paroles de chansons, ses nouvelles et ses essais, des visions à la fois personnelles et universelles, nourries aussi de lectures littéraires ou de sciences humaines en autodidacte. La nature est aussi une source d'inspiration importante pour lui, ainsi que l'étude et le conseil en astrologie.
il exprime ainsi des réflexions, des ressentis, des images poétiques, pouvant inspirer tout lecteur.

Choisissant l'auto-édition pour la liberté littéraire et l'indépendance éditoriale, ses 2 premiers livres ont pu être édités grâce au fort succès d'un financement participatif.

Philmar poursuit ses activités dans plusieurs projets musicaux, artistiques, astrologiques et d'écriture.

`

function Main() {
    return (
        <>
            <header className="header">
                <nav>
                    <ul>
                        <li className="tab"><Link className="nav-link" to="home" smooth={true} duration={500}>Accueil</Link></li>
                        <li className="tab"><Link className="nav-link" to="books" smooth={true} duration={500}>Livres</Link></li>
                        <li className="tab"><Link className="nav-link" to="bio" smooth={true} duration={500}>Bio</Link></li>
                        <li className="tab"><Link className="nav-link" to="events" smooth={true} duration={500}>Actualité/Évènements</Link></li>
                        <li className="tab"><Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <div id="home"><Home/></div>
            <div id="books"><Books /></div>
            <div id="bio">
                <Bio caption={bioCaption}/>
            </div>
            <div id="events"><Events /></div>
            <div id="contact"><Contact /></div>

            <footer className="footer">
                <p>© Copyright Philmar All Rights Reserved</p>
            </footer>
        </>
    );
}

export default Main;

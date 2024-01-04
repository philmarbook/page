import '../../assets/scss/pages/tabs/Bio.scss';


function Bio({srcImage}) {
    return(
        <div className='bio'>
            <div className="bio-caption">
                <p>Philmar est musicien depuis 40 ans et a rapidement fait de la musique sa profession. Multi-instrumentiste et chanteur, il a exploré divers univers musicaux tels que le rock, le jazz et les musiques du monde. Philmar a joué en solo, dans différents groupes, et a accompagné d'autres artistes. Au fil des années, il a enregistré des albums et animé des stages sur diverses thématiques pour différents publics.</p>
                <p>En parallèle de sa carrière musicale, Philmar s'est également consacré à l'écriture depuis 40 ans, bien qu'il n'ait diffusé ses créations qu'à travers ses chansons. Observateur curieux du monde et des êtres humains, et doté d'une sensibilité particulière dans ses relations quotidiennes, il a trouvé dans les mots un moyen d'exprimer et de magnifier ses expériences. À travers ses poèmes, paroles de chansons, nouvelles et essais, Philmar partage des visions personnelles et universelles, enrichies de ses lectures en littérature et en sciences humaines en tant qu'autodidacte. La nature est une source d'inspiration majeure pour lui, tout comme l'astrologie, domaine dans lequel il étudie et conseille. Ses œuvres littéraires offrent des réflexions, des sentiments et des images poétiques susceptibles d'inspirer tout lecteur.</p>
                <p>Privilégiant l'auto-édition pour sa liberté littéraire et son indépendance éditoriale, Philmar a pu publier ses deux premiers livres grâce au succès d'un financement participatif.</p>
                <p>En tant que co-fondateur il est très impliqué dans la mise en place concrète de l'écolieu Art-Terre en Savoie.</p>
                <p>Philmar poursuit son engagement dans ce projet, et continue de mener plusieurs projets dans les domaines de la musique, de l'astrologie et de l'écriture.</p>
                <span id="plus-dinfos" className="contact-list-item-label">Pour plus d'informations : <a href="https://linktr.ee/philmarlinks" className="contact-list-item-link">Les liens de Philmar</a></span>
            </div>
            <div className='bio-image'>
                <img className="bio-image-file" src={srcImage} alt="Philmar"></img>
            </div>
        </div>
    )
}

export default Bio;


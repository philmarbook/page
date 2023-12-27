import '../../assets/scss/pages/tabs/Home.scss';

function Home() {
    return(
        <div className='home'>
            <div className='home-header'>
                <ul>
                    <li>Philmar - Auteur</li>
                    <li>2 livres en auto-édition</li>
                </ul>
            </div>
            <div className="home-caption">
                <p>Découvrez l'auteur-artiste,<br />ses livres en vente,<br />et son actualité.</p>
            </div>
        </div>
    )
}

export default Home
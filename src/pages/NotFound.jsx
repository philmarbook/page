import '../assets/scss/pages/NotFound.scss';

function NotFound() {
    return(
        <div className='error'>
            <div className='error--container'>
                <p className="error--container--404">404</p>
                <p className="error--container--message">Oups! La page que vous demandez n'existe pas. 😵</p>
                <a href="./">
                        <button className="book-button-text">Retourner à l'accueil</button>
                </a>
            </div>
        </div>
    )
}

export default NotFound
import '../assets/scss/pages/NotFound.scss';

function NotFound() {
    return(
        <div className='error'>
            <div className='error--container'>
                <p className="error--container--404">404</p>
                <p className="error--container--message">Oups! La page que vous demandez n'existe pas. 😵</p>
                <a className="error--container--go-gome" href="./">Retourner à l'accueil</a>
            </div>
        </div>
    )
}

export default NotFound
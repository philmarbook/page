import '../assets/scss/components/Book.scss';

function Book({ title, imageSrc, price, url, caption}) {
    return (
        <div className="book">
            <div>
                <h1 className="book-title">{title}</h1>
                <img className="book-image" src={imageSrc} alt={title} />
                <p className="book-price">{price}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <button className="book-button">Acheter</button>
                </a>
            </div>
            <div className="book-caption">
                {caption}
            </div>
        </div>
    )
}

export default Book;
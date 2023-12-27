import '../assets/scss/components/Book.scss';

function Book({ title, imageSrc, price, url,intro00 ,intro01, caption00a, caption00b, caption01a, caption01b, caption02a, caption02b }) {
    return (
        <div className="book">
            <div>
                <h1 className="book-title">{title}</h1>
                <img className="book-image" src={imageSrc} alt={title} />
                <p className="book-price">{price}</p>
                <div className='book-button'>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <button className="book-button-text">Acheter</button>
                    </a>
                </div>
            </div>
            <div className="book-caption">
                <p id="book-caption-part0a" className="book-caption-text">{intro00}</p>
                <p id="book-caption-part0b" className="book-caption-text">{intro01}</p>
                <p id="book-caption-part1aa" className="book-caption-text">{caption00a}</p>
                <p id="book-caption-part1ab" className="book-caption-text">{caption00b}</p>
                <p id="book-caption-part1ba" className="book-caption-text">{caption01a}</p>
                <p id="book-caption-part1bb" className="book-caption-text">{caption01b}</p>
                <p id="book-caption-part1ca" className="book-caption-text">{caption02a}</p>
                <p id="book-caption-part1cb" className="book-caption-text">{caption02b}</p>
            </div>
        </div>
    )
}

export default Book;
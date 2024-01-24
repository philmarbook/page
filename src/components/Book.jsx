import '../assets/scss/components/Book.scss';
import paypalButton from '../assets/images/paypal-button.png';

function Book({ title, imageSrc,
    bookPrice, epubPrice,
    intro00 ,intro01, caption00a,
    caption00b, caption01a, caption01b, caption02a, caption02b,
    bulletpoint0, bulletpoint1, bulletpoint2, bulletpoint3, bulletpoint4, bulletpoint5,
    ebookPriceValue, paperbackPriceValue
}) {
    return (
        <div className="book">

            <div id="book-container">
                <h1 className="book-title">{title}</h1>
                <img className="book-image" src={imageSrc} alt={title} />
                <p className="book-price">{bookPrice}</p>
                <p className="book-price">{epubPrice}</p>

                <form className="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="HMBT8AKXFM4LU" />
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="hidden" name="on0" value="Format"/>
                                    Format
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select name="os0">
                                        <option value="Broché (frais livraison inclus)">
                                            {paperbackPriceValue}
                                        </option>
                                        <option value="Ebook">
                                            {ebookPriceValue}
                                        </option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="hidden" name="currency_code" value="EUR" />
                    <input type="image" src={paypalButton} border="0" 
                        name="submit" title="PayPal, votre réflexe sécurité pour payer en ligne." alt="Acheter" />
                </form>



            </div>
            <div className="book-caption">
                <div className='book-caption-top'>
                    <p id="book-caption-part0a" className="book-caption-top-text">{intro00}</p>
                    <p id="book-caption-part0b" className="book-caption-top-text">{intro01}</p>
                </div>
                <div className='book-caption-bottom'>
                    <div className='book-caption-bottom-titles'>
                        <p id="book-caption-part1aa" className="book-caption-bottom-titles-text">{caption00a}</p>
                        <p id="book-caption-part1ab" className="book-caption-bottom-titles-text">{caption00b}</p>
                        <p id="book-caption-part1ba" className="book-caption-bottom-titles-text">{caption01a}</p>
                        <p id="book-caption-part1bb" className="book-caption-bottom-titles-text">{caption01b}</p>
                        <p id="book-caption-part1ca" className="book-caption-bottom-titles-text">{caption02a}</p>
                        <p id="book-caption-part1cb" className="book-caption-bottom-titles-text">{caption02b}</p>
                    </div>
                    <div className='book-caption-bottom-bulletpoints'>
                        <p id="book-caption-bulletpoint0" className="book-caption-bottom-bulletpoints-text">{bulletpoint0}</p>
                        <p id="book-caption-bulletpoint1" className="book-caption-bottom-bulletpoints-text">{bulletpoint1}</p>
                        <p id="book-caption-bulletpoint2" className="book-caption-bottom-bulletpoints-text">{bulletpoint2}</p>
                        <p id="book-caption-bulletpoint3" className="book-caption-bottom-bulletpoints-text">{bulletpoint3}</p>
                        <p id="book-caption-bulletpoint4" className="book-caption-bottom-bulletpoints-text">{bulletpoint4}</p>
                        <p id="book-caption-bulletpoint5" className="book-caption-bottom-bulletpoints-text">{bulletpoint5}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book;
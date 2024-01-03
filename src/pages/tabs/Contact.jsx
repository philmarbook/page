import '../../assets/scss/pages/tabs/Contact.scss';

function Contact() {
    return(
        <div className="contact">
            <h2 className="contact-title">Contactez Philmar</h2>
            <ul className="contact-list">
                <li className="contact-list-item">
                    <span className="contact-list-item-label">📧 Email : </span> 
                    <a href="mailto:philmar@lilo.org" className="contact-list-item-link">philmar@lilo.org</a>
                </li>
                <li className="contact-list-item">
                    <span className="contact-list-item-label">📞 Téléphone : </span> 
                    <a href="tel:+33123456789" className="contact-list-item-link">+33 6 28 06 07 56</a>
                </li>
                <li className="contact-list-item">
                    <span className="contact-list-item-label">💬 WhatsApp : </span> 
                    <a href="https://wa.me/33628060756" className="contact-list-item-link">Envoyer un message</a>
                </li>
                <li className="contact-list-item">
                    <span className="contact-list-item-label">💬 Telegram : </span> 
                    <a href="https://t.me/philmarzic" className="contact-list-item-link">Envoyer un message</a>
                </li>
                <li className="contact-list-item">
                    <span className="contact-list-item-label">🔗 Mes liens : </span> 
                    <a href="https://linktr.ee/philmarlinks" className="contact-list-item-link">linktr.ee</a>
                </li>
            </ul>
        </div>
    )
}

export default Contact

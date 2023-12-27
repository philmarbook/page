import '../../assets/scss/pages/tabs/Contact.scss';

function Contact() {
    return(
        <div className="contact-container">
            <h2 className="contact-title">Contactez Philmar</h2>
            <ul className="contact-list">
                <li className="contact-item">
                    <span className="contact-label">📧 Email : </span> 
                    <a href="mailto:philmar@lilo.org" className="contact-link">philmar@lilo.org</a>
                </li>
                <li className="contact-item">
                    <span className="contact-label">📞 Téléphone : </span> 
                    <a href="tel:+33123456789" className="contact-link">+33 6 28 06 07 56</a>
                </li>
                <li className="contact-item">
                    <span className="contact-label">💬 WhatsApp : </span> 
                    <a href="https://wa.me/33628060756" className="contact-link">Envoyer un message</a>
                </li>
                <li className="contact-item">
                    <span className="contact-label">💬 Telegram : </span> 
                    <a href="https://t.me/philmarzic" className="contact-link">Envoyer un message</a>
                </li>
                <li className="contact-item">
                    <span className="contact-label">🔗 Mes liens : </span> 
                    <a href="https://linktr.ee/philmarlinks" className="contact-link">linktr.ee</a>
                </li>
            </ul>
        </div>
    )
}

export default Contact

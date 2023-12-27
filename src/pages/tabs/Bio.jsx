import '../../assets/scss/pages/tabs/Bio.scss';

function Bio({ caption }) {
    return(
        <div className="caption">
            <p className="bio-text">{caption}</p>
        </div>
    )
}

export default Bio;

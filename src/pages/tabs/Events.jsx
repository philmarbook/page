import '../../assets/scss/pages/tabs/Events.scss';


function Events() {
    return(
        <div className='events'>
            <div className="events-container">
                <div className='events-block'>
                    <h1 className='events-block-title'>Rencontre à la Librairie Livres en Tête</h1>
                    <h2 className='events-block-date'>Jeudi 22 février 18:00 à 19:30</h2>
                    <p className='events-block-location'>82 Rue du Mont Joly, 74700 SALLANCHES, France</p>
                    <p className='events-block-number'>04 50 93 92 40</p>
                    <div>
                        <p className='events-block-program'></p>
                        <p className='events-block-program'></p>
                        <p className='events-block-program'></p>
                    </div>
                </div>
                <div className='events-block'>
                    <h1 className='events-block-title'>Rencontre à la Librairie des Bauges</h1>
                    <h2 className='events-block-date'>Samedi 16 mars 17:00 à 19:00</h2>
                    <p className='events-block-location'>104 rue de la République, 73200 ALBERTVILLE, France</p>
                    <p className='events-block-number'>04 79 32 00 91</p>
                    <div>
                        <p className='events-block-program'></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events;


import princesseDataImage from '../../assets/images/princesse-data.jpg';
import leveToiEtCodeImage from '../../assets/images/leve-toi-et-code.jpg';
import Book from "../../components/Book";


function Books() {
    return(
        <>
            <div>
                <Book
                title="Princesse Data 📁"
                imageSrc={princesseDataImage}
                price="15.00€"
                url="https://www.pokepedia.fr/Pikachu"
                intro00="Êtes vous prêts à voyager dans les contrées inconnues, les univers étranges et l'humour insolite d'un ouvrage déroulant avec moult couleurs dialogues, descriptions et réflexions?"
                intro01="Si vous êtes intrigués, vous serez conquis, envoûtés par Les Humains adorent les Histoires."
                caption00a="Thématique Générale : "
                caption00b="'Les Humains adorent les Histoires !' est un recueil de nouvelles et d'essais qui explore la fascination des humains pour les récits. Il aborde l'influence des histoires sur notre compréhension du monde, nos émotions, nos expériences et nos choix de vie."
                caption01a="Style et Expression : "
                caption01b="L'écriture est engageante et réfléchie, mêlant prose descriptive et analyse introspective pour captiver le lecteur dans le récit et stimuler la réflexion. L'auteur utilise une variété de techniques narratives, avec un style d'écriture à la fois accessible et profond."
                caption02a="Diversité des Sujets : "
                caption02b="Le recueil couvre une large gamme d'émotions et d'expériences, depuis l'identité personnelle et collective aux analyses de la culture et de la société, en passant par les mythes et légendes, soulignant le rôle des histoires dans la vie humaine."/>
            </div>
            <div>
                <Book
                title="Lève-toi et code 💻"
                imageSrc={leveToiEtCodeImage}
                price="15.00€"
                url="https://www.pokepedia.fr/Mewtwo"
                intro00="Êtes vous prêts à plonger dans les sentiments, les ferveurs, et les rêveries d'un ouvrage qui, tour à tour cisèle les mots ou les impulse?"
                intro01="Si ça vous interpelle, Mélomorphoses vous touchera profondément."
                caption00a="Thématique Générale : "
                caption00b="'Mélomorphoses' est un recueil de poèmes et de chansons qui traite de thèmes introspectifs et universels. Il explore la profondeur des sentiments humains, la beauté de la création artistique, et la relation complexe entre l'homme et le monde qui l'entoure."
                caption01a="Style et Expression : "
                caption01b="Les textes sont écrits avec une touche lyrique et métaphorique, invitant à une réflexion sur des sujets tels que l'existence, l'amour, et la quête de sens. L'utilisation des images poétiques enrichit l'expression des émotions et des idées."
                caption02a="Diversité des Sujets : "
                caption02b="Le recueil semble couvrir un large éventail de sujets, allant de l'exploration personnelle à la contemplation de la nature et de l'univers, en passant par la célébration de l'art et de la créativité."/>
            </div>
        </>
    )
}

export default Books
import "./AngelCard.css"
const AngelCard = (Props) => {
    return (
        <div className={Props.flipped ? "Card flipped" : "Card"}>
            <div className="Card-Front">
                <img src={Props.image} alt="Back of card" className="Card-Image" />
            </div>
            <div className="Card-Back">
                <img src={Props.backImage} alt="Front of card" className="Card-Image" />
            </div>
        </div>
    )
}

export default AngelCard
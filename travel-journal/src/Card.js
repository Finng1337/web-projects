import pin from "./img/pin.svg"

export default function Card(props) {
    return (
        <section>
            <img src={props.imageUrl} alt={props.title} className={"card-img"}/>
            <div className={"card-content"}>
                <div className={"card-dest"}>
                    <img src={pin} alt={"Pin"}/>
                    <p className={"card-location"}>{props.location}</p>
                    <a href={props.googleMapsUrl} target={'_blank'} className={"card-googleLink"}>View on Google Maps</a>
                </div>
                <h2 className={"card-title"}>{props.title}</h2>
                <strong className={"card-date"}>{props.startDate} - {props.endDate}</strong>
                <p className={"card-desc"}>{props.description}</p>
            </div>
        </section>
    );
}
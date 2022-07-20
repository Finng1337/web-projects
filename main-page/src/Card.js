export default function Card(props) {
    const cardStyle = {
        backgroundColor: props.primaryColor,
        color: props.secondaryColor
    };

    const linkStyle = {
        backgroundColor: props.secondaryColor,
        color: props.primaryColor
    }
    return (
        <article style={cardStyle}>
            <img src={props.imageUrl} alt={"Preview of project"} className={"card-preview"}/>
            <section className={"card-about"}>
                <h2 className={"card-title"}>{props.title}</h2>
                <p className={"card-location"}>{props.description}</p>
                <a href={props.siteURL} className={"card-siteLink"} style={linkStyle}>View site</a>
            </section>
        </article>
    );
}
import React from "react";

export default function Card(props) {

    const[linkBg, setLinkBg] = React.useState(props.secondaryColor);
    const[linkText, setLinkText] = React.useState(props.primaryColor);

    const cardStyle = {
        backgroundColor: props.primaryColor,
        color: props.secondaryColor
    };

    const linkStyle = {
        backgroundColor: linkBg,
        color: linkText
    };

    function linkEnter() {
        setLinkBg("transparent");
        setLinkText(props.secondaryColor);
    }

    function linkExit() {
        setLinkBg(props.secondaryColor);
        setLinkText(props.primaryColor);
    }

    return (
        <article style={cardStyle}>
            <img src={props.imageUrl} alt={"Preview of project"} className={"card-preview"}/>
            <section className={"card-about"}>
                <h2 className={"card-title"}>{props.title}</h2>
                <p className={"card-location"}>{props.description}</p>
                <a href={props.siteURL} className={"card-siteLink"} style={linkStyle} onMouseEnter={linkEnter} onMouseOut={linkExit}>View site</a>
            </section>
        </article>
    );
}
import earth from "./img/earth.svg"

export default function Nav() {
    return (
        <nav>
            <img src={earth} alt={"Earth"}/>
            <h1 className={"title"}>my travel journal.</h1>
        </nav>
    );
}
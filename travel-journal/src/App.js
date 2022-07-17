import Card from "./Card";
import Nav from "./Nav";
import data from "./data";

export default function App() {
    const cards = data.map(obj => {
        return (
            <Card
                key={obj.title}
                {...obj}
            />
        );
    });
    return (
        <div className="container">
            <Nav/>
            <main>
                {cards}
            </main>
        </div>
    );
}

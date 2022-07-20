import Card from "./Card";
import Nav from "./Nav";
import data from "./data";
import './index.css';

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
                <p className="ending">To be continued...</p>
            </main>
        </div>
    );
}

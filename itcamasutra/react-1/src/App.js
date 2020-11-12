import './App.css';
import Header from "./components/Header/Header";
import Technologies from "./components/Technologies/Technologies";
import Button from "./components/Button/Button";

const App = () => {
    return (
        <div>
            <p>before header</p>
            <Header/>
            <p>after header</p>
            <Technologies/>

            <div>
                <Button kind="primary1" onClick={() => console.log("Кнопка нажата!")}>
                    Привет, мир!
                </Button>
            </div>
        </div>
    );
}

export default App;
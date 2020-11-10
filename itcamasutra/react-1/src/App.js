import './App.css';

const App = () => {
    return (
        <div>
            <p>before header</p>
            <Header/>
            <p>after header</p>
            <Technologies />
        </div>
    );
}

const Technologies = () => {
    return (
        <ul>
            <li>List item</li>
            <li>html</li>
            <li>css</li>
            <li>js</li>
        </ul>
    );
};

const Header = () => {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">New Feed</a>
            <a href="#">Messages</a>
        </div>
    );
};

export default App;
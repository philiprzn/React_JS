import React from 'react';
import './App.css';
import Button from "./components/Button/Button";

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="logo-finished.png" alt="logo"/>
            </header>
            <nav className='nav'>
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">Music</a></div>
                <div><a href="#">Settings</a></div>
                <br/>
                <Button kind="primary1" onClick={() => console.log("Кнопка нажата!")}>
                    Привет, мир!
                </Button>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png" alt="image"/>
                </div>
                <div>
                    Ava + description
                </div>
                <div>
                    my posts
                    <div>
                        New posts
                    </div>
                    <div>
                        <div>post1</div>
                        <div>post2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
import React from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Button kind="primary1" onClick={() => console.log("Кнопка нажата!")}>
                Привет, мир 1!
            </Button>
            <Profile/>
        </div>
    );
};

export default App;
import style from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className="nav">
            <div><a href="#" className={style.item}>Profile</a></div>
            <div><a href="#" className={`${style.item} ${style.active}`}>Messages</a></div>
            <div><a href="#" className={style.item}>Music</a></div>
            <div><a href="#" className={style.item}>Settings</a></div>
            <br/>
        </nav>
    )
};

export default Navbar;
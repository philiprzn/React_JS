import style from './profile.module.css';

const Profile = () => {
    return (
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
                <div className="posts">
                    <div className={style.item}>post1</div>
                    <div className={style.item}>post2</div>
                </div>
            </div>
        </div>
    )
};

export default Profile;

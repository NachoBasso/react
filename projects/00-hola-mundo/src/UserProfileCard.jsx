import { useState } from 'react'

/*Código basado en el curso: Curso React 2024 https://www.youtube.com/watch?v=7iobxzd_2wY"*/

export function UserProfileCard({ userName, name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'user-profile-card-button is-following' : 'user-profile-card-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <article className="user-profile-card">
            <header className="user-profile-card-header">
                <img className="user-profile-card-avatar" src={`https://unavatar.io/${name}`} alt={`El avatar de ${name}`} />
                <div className="user-profile-card-info">
                    <strong>{name}</strong>
                    <span className="user-profile-card-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="user-profile-card-text">{text}</span>
                    <span className="user-profile-card-unfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}
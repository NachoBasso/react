import { useState } from 'react';
import './App.css';
import { UserProfileCard } from './UserProfileCard';

/*Código basado en el curso: Curso React 2024 https://www.youtube.com/watch?v=7iobxzd_2wY"*/

export function App() {
    const [name, setName] = useState('animal');
    const users = [
        {
            userName: "animal0303456",
            name: name,
            isFollowing: false
        },
        {
            userName: "crazy0303456",
            name: "crazy",
            isFollowing: true
        }
    ];

    return (
        <section className="App">
            {users.map(user => {
                const { userName, name, isFollowing } = user;

                return (
                    <UserProfileCard 
                        key={userName}
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing} 
                    />
                );
            })}
            <button onClick={() => setName('Nachito')}>Cambiar Nombre</button>
        </section>
    );
}
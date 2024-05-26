import React from 'react';
import Profile from './Profile';

const users = [
    { Name: 'Gift Udeh', Boi: 'Software Engineer', DateOfBirth: '1997' },
    { Name: 'Esther Ike', Boi: 'Graphic Designer', DateOfBirth: '1990' },
    { Name: 'Obi Charles', Boi: 'Teacher', DateOfBirth: '1989'}
];

const App = () => {
    return (
        <div>
            <h1>User Profiles</h1>
            <Profile users={users} />
        </div>
    );
};

export default App;


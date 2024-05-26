import React, { useState, useEffect } from 'react';
import UserDetails from './UserDetails';

const profile = ({ users }) => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        // Setting the users to the state variable on first page load
        setUserList(users);
    }, [users]);

    return (
        <div>
            {userList.map((user, index) => (
                <UserDetails key={index} user={user} />
            ))}
        </div>
    );
};

export default Profile;




import React from 'react';

const UserDetails = ({ user }) => {
    return (
        <div>
            <h2>{user.Name}</h2>
            <p>{user.Boi}</p>
            <p>Date of Birth: {user.DateOfBirth}</p>
        </div>
    );
};

export default UserDetails;
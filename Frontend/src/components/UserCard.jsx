import React from 'react';
import { Link } from 'react-router-dom';
import "./UserCard.css";

const UserCard = ({ user }) => {
    return (
        <div className='card-details'>
            <div className='card'>
                <h3>Name: {user.name}</h3>
                <p>Email: {user.email}</p>
                <p>City: {user.address.city}</p>
                <Link to={`/users/${user.id}`} className='text-blue-500'>View More Details</Link>
            </div>
        </div>
    );
};

export default UserCard; 

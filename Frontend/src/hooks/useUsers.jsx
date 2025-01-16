import { useState, useEffect } from 'react';
import axios from 'axios';

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { users, loading, error };
};

export default useUsers;

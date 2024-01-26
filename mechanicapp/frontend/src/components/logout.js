import { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

function LogOutPage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Perform logout operations here
        localStorage.removeItem('token'); // Remove the token from local storage
        navigate('/'); // Redirect to home page
    }, []);

    // After logging out, redirect to home
    return <Navigate to="/" />;
}

export default LogOutPage;
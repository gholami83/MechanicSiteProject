import React, { useState, useEffect } from 'react';

function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export default FetchData;

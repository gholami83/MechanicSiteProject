import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

// function Mechine() {
//   const footertag = `
//    `;
//   return <div dangerouslySetInnerHTML={{ __html: footertag }} />;
// }

export default function MechineComponent() {
    const [mechine, setUser] = useState(null);
    const { mechineId } = useParams();
  
    useEffect(() => {
      // Replace with your API endpoint or data fetching logic
      const fetchUserData = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${mechineId}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.error("Fetching user data failed", error);
        }
      };
  
      fetchUserData();
    }, [mechineId]); // Re-run the effect if userId changes
  
    if (!mechine) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>User Details</h1>
        <p>ID: {mechine.id}</p>
        <p>title: {mechine.title}</p>

      </div>
    );
}

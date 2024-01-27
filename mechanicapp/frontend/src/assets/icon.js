import React, { useState, useEffect } from 'react';
import Sun from '../assets/images/Sun.svg'
import Moon from '../assets/images/Moon.svg';

function Icon() {
    // Define a state variable to keep track of the current theme
    const [theme, setTheme] = useState('light');
   
    // Use the useEffect hook to apply the correct styles to the body element whenever the theme changes
    useEffect(() => {
       const body = document.body;
       const links = body.getElementsByTagName("a");
       if (theme === 'dark') {
         body.style.backgroundColor = 'rgb(2, 2, 26)';
         body.style.color = '#fff';
         Array.from(links).forEach(link => {
            link.style.color = '#fff';
          });
         
       } else {
         body.style.backgroundColor = '#fff';
         body.style.color = '#000';
         Array.from(links).forEach(link => {
            link.style.color = '#000';
          });
         
       }
    }, [theme]);
   
    // Function to toggle the theme
    const toggleTheme = () => {
       setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    };
   
    return (
       <img 
         src={theme === 'light' ? Sun : Moon} 
         alt={theme} 
         onClick={toggleTheme} 
       />
    );
   }
   

export default Icon;

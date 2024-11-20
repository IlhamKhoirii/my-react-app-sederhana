import React from 'react';
import { useNavigate } from 'react-router-dom';
function NavigationButton() {
    let navigate = useNavigate();
    function handleClick() {
        console.log('Navigating to about page');
        navigate('/about');
    }
    return (
        <button onClick={handleClick}>
            Pergi ke Halaman About
        </button>
    );
}
export default NavigationButton;
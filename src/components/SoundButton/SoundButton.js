import React from 'react'
import './SoundButton.css'
export const SoundButton = ({ title }) => {
    return (
        <button className='square' onClick={() => {
            console.log("VOLUME CHANGES");
        }}>
            <p className='title-sound'>{title}</p>
        </button>
    )
}

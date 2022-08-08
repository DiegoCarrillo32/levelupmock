import React from 'react'
import './SoundButton.css'
export const SoundButton = ({ title }) => {
    return (
        <button className='square'>
            <p className='title-sound'>{title}</p>
        </button>
    )
}

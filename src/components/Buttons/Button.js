import React from 'react'
import './Button.css'
export const Button = ({ callback, title, active }) => {
    return (
        <div className='button' style={{

            background: active ? '#20CE6E' : '#E0E0E0'
        }}>
            <p className='title'>{title}</p>
        </div>
    )
}

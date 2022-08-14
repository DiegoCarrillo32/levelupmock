import React from 'react'
import './Button.css'
export const Button = ({ callback, title, active }) => {
    return (
        <div className='button' style={{

            background: active ? '#20CE6E' : '#FFFFFF'
        }}
            onClick={() => {
                callback()
            }}>
            <p className='title' style={{
                color: active ? 'white' : '#C1C1C1'
            }}>{title}</p>
        </div>
    )
}

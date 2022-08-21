import React from 'react'
import './SoundButton.css'
export const SoundButton = ({ title, onClickEvent, effect }) => {
    return (
        <button className='square' onClick={() => {

            effect ? onClickEvent(prev => {
                if (prev + 10 > 100) {
                    return 100
                }
                return prev + 10
            }) : onClickEvent(prev => {
                if (prev - 10 < 0) {
                    return 0
                }
                return prev - 10
            })

        }}>
            <p className='title-sound'>{title}</p>
        </button>
    )
}

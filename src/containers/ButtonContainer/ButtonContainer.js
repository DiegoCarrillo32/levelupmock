import React, { useState } from 'react'
import { Button } from '../../components/Buttons/Button'
import './ButtonContainer.css'
export const ButtonContainer = () => {

    const [buttons, setButtons] = useState([{

        title: 'Handset',
        callback: () => {

        },
        active: false
    },
    {
        title: 'Panel',
        callback: () => {
            console.log('PAUSE')
        },
        active: false
    },
    {
        title: 'Portable',
        callback: () => {
            console.log('STOP')
        },
        active: false
    }])

    const changeActiveButton = (index) => {
        setButtons(buttons.map((button, i) => {
            if (i === index) {
                button.active = true
            } else {
                button.active = false
            }
            return button
        }
        ))
    }

    return (
        <div className='button-container'>
            {
                buttons.map((button, index) => {
                    return (
                        <Button key={index}
                            title={button.title}
                            callback={() => {
                                changeActiveButton(index)
                            }}
                            active={button.active} />
                    )
                }
                )}
        </div>
    )
}

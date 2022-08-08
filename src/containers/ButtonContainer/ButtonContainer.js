import React from 'react'
import { Button } from '../../components/Buttons/Button'
import './ButtonContainer.css'
export const ButtonContainer = () => {
    return (
        <div className='button-container'>
            <Button title={"Handset"} active />
            <Button title={"Panel"} />
            <Button title={"Portable"} />
        </div>
    )
}

import React from 'react'
import { SoundButton } from '../../components/SoundButton/SoundButton'
import "./VolumeContainer.css"
export const VolumeContainer = ({ icon }) => {
    return (

        <div className='volume-container'>
            <img alt='icon' src={icon} className="icon" />
            <div className='buttons-container'>
                <SoundButton title={'-'} />
                <SoundButton title={"+"} />
            </div>

        </div>
    )
}

import React from 'react'

import "./VolumeContainer.css"
export const VolumeContainer = ({ icon, children }) => {

    return (

        <div className='volume-container'>
            <img alt='icon' src={icon} className="icon" />
            <div className='buttons-container'>
                {
                    children
                }
            </div>


        </div>
    )
}

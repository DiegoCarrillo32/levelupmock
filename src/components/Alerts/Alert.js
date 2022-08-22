import React from 'react'
import './Alert.css'

export const Alert = ({ SVG, SVG2, TEXT, setIsOpen, MUTE }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }} onClick={setIsOpen}>
            <div className='circle'>
                <div className='border'>
                    <div className='circle-inner'>
                        <img src={(MUTE && SVG != null) ? SVG2 : SVG} alt='ALERT' />
                    </div>



                </div>
            </div>
            <div className='text'>
                {(MUTE) ? "PRESS TO UNMUTE" : TEXT}
            </div>
        </div>
    )
}

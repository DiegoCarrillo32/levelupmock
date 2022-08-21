import React from 'react'
import './Alert.css'

export const Alert = ({ SVG, TEXT, setIsOpen }) => {
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
                        <img src={SVG} alt='ALERT' />
                    </div>



                </div>
            </div>
            <div className='text'>
                {TEXT}
            </div>
        </div>
    )
}

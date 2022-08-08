import React from 'react'
import './Alert.css'

export const Alert = ({ SVG, TEXT }) => {
    return (
        <div style={{ flexDirection: 'row' }}>
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

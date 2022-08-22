import React, { useEffect, useState } from 'react'
import './Alert.css'

export const Alert = ({ SVG, SVG2, TEXT, setIsOpen, MUTE, ALERT_TIMER }) => {

    const [Warning, setWarning] = useState(true)

    useEffect(() => {
        if (MUTE) {
            return
        }
        if (ALERT_TIMER.length === 0) {
            return
        }
        const int = setInterval(() => {
            console.log("CAMBIAR ALERTA");
            if (ALERT_TIMER.length === 0) {

                return
            }
            setWarning(ALERT_TIMER.shift())
        }, 1000)

        return () => {
            clearInterval(int)
        }
    }, [])


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
                        <img src={(MUTE) ? SVG2 : (Warning) ? SVG : SVG2} alt='ALERT' />
                    </div>



                </div>
            </div>
            <div className='text'>
                {(MUTE) ? "PRESS TO UNMUTE" : TEXT}
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import './AlertContainer.css'
import { Alert } from '../../components/Alerts/Alert'
import AC_POWER from '../../imgs/AC_POWER_PIC.svg'
import BATERIA from '../../imgs/BATERIA_PIC.svg'
import ANTENA_PIC from '../../imgs/ANTENA_PIC.svg'
import DOOR_PIC from '../../imgs/DOOR_PIC.svg'
import TERMO_PIC from '../../imgs/TEMOMETRO_PIC.svg'
import Modal from '../../components/Modal/Modal'
export const AlertContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const alerts = {
        AC_POWER: {
            SVG: AC_POWER,
            TEXT: 'AC POWER'
        },
        BATERIA: {
            SVG: BATERIA,
            TEXT: 'BATERIA'
        },
        ANTENA: {
            SVG: ANTENA_PIC,
            TEXT: 'ANTENA'
        },
        DOOR: {
            SVG: DOOR_PIC,
            TEXT: 'DOOR'
        },
        TERMO: {
            SVG: TERMO_PIC,
            TEXT: 'TERMO'
        },
        DEFAULT: {
            SVG: AC_POWER,
            TEXT: 'DEFAULT'

        },
        DEFAULT1: {
            SVG: AC_POWER,
            TEXT: 'DEFAULT'

        },

    }
    return (
        <>
            <div className='alert-rectangle'>

                <div className='alert-list'>
                    {
                        Object.keys(alerts).map(key => {
                            return (
                                <Alert
                                    SVG={alerts[key].SVG}
                                    TEXT={alerts[key].TEXT}
                                    setIsOpen={() => setIsOpen(!isOpen)}
                                />
                            )
                        }
                        )
                    }
                    {/* <Alert key={1} SVG={AC_POWER} TEXT={"MAIN POWER"} setIsOpen={() => {
                        setIsOpen(!isOpen)
                    }} />
                    <Alert key={3} SVG={BATERIA} TEXT={"BATTERY STATUS"} />
                    <Alert key={2} SVG={DOOR_PIC} TEXT={"CABINET TEMPER"} />
                    <Alert key={4} SVG={TERMO_PIC} TEXT={"TEMPERATURE"} />
                    <Alert key={5} SVG={ANTENA_PIC} TEXT={"ANTENNA"} />
                    <Alert key={6} SVG={BATERIA} TEXT={"ALERT#6"} />
                    <Alert key={7} SVG={BATERIA} TEXT={"ALERT#7"} /> */}

                </div>
            </div>
            {isOpen && <Modal />}
        </>

    )
}

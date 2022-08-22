import React, { useState } from 'react'
import './AlertContainer.css'
import { Alert } from '../../components/Alerts/Alert'
import AC_POWER from '../../imgs/AC_POWER_PIC.svg'
import BATERIA from '../../imgs/BAT_CHARGED_COMPLETE.svg'
import ANTENA_PIC from '../../imgs/ANTENA_PIC.svg'
import DOOR_PIC from '../../imgs/TAMPERING_CLOSED.svg'
import TERMO_PIC from '../../imgs/TEMP_COLD.svg'
import AMPLIFICATION from '../../imgs/AMPLIFICATION.svg'
import UN_MUTE from '../../imgs/UN_MUTE.svg'
import MUTE from '../../imgs/MUTE.svg'
import Modal from '../../components/Modal/Modal'
export const AlertContainer = () => {
    const [Mute, setMute] = useState(true)

    const [isOpen, setIsOpen] = useState({
        OPEN: false,
        TITLE: "",
        INFO: "",
        TEXT: ""
    });
    const alerts = {
        AC_POWER: {
            SVG: AC_POWER,
            SVG2: null,
            TEXT: 'AC POWER',
            TITLE: "220 V",
            INFO: "MAIN POWER IS ACTIVE"
        },
        BATERIA: {
            SVG: BATERIA,
            SVG2: null,
            TEXT: 'BATTERY',
            TITLE: "90% ~ 50%",
            INFO: "BATTERY STATUS IS NORMAL"
        },
        DOOR: {
            SVG: DOOR_PIC,
            SVG2: null,
            TEXT: 'TAMPERING',
            TITLE: "CLOSE",
            INFO: "CABINET TAMPER IS CLOSED"
        },
        TERMO: {
            SVG: TERMO_PIC,
            SVG2: null,
            TEXT: 'TEMPERATURE',
            TITLE: "194F",
            INFO: "CABINET TEMPERATURE IS NORMAL"
        },
        ANTENA: {
            SVG: ANTENA_PIC,
            SVG2: null,
            TEXT: 'ANTENNA',
            TITLE: "200",
            INFO: "ANTENA SIGNAL IS IN TROUBLE"
        },
        AMPLIFICATION: {
            SVG: AMPLIFICATION,
            SVG2: null,
            TEXT: 'AMPLIFICATION',
            TITLE: "100",
            INFO: "AMPLIFICATION IS IN TROUBLE"


        },
        MUTE: {
            SVG: UN_MUTE,
            SVG2: MUTE,
            TEXT: 'PRESS TO MUTE',
            TITLE: "",
            setMute: true,
            MUTE: Mute

        }

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
                                    SVG2={alerts[key].SVG2}
                                    TEXT={alerts[key].TEXT}
                                    MUTE={alerts[key].MUTE}
                                    setIsOpen={alerts[key].setMute ? () => setMute(prev => !prev) : () => setIsOpen({ OPEN: !isOpen.OPEN, TITLE: alerts[key].TITLE, INFO: alerts[key].INFO, TEXT: alerts[key].TEXT })}
                                />

                            )

                        }
                        )
                    }

                </div>
            </div>
            {isOpen.OPEN && <Modal isOpen={isOpen} />}

        </>

    )
}

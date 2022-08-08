import React from 'react'
import './AlertContainer.css'
import { Alert } from '../../components/Alerts/Alert'
import AC_POWER from '../../imgs/AC_POWER_PIC.svg'
import BATERIA from '../../imgs/BATERIA_PIC.svg'
import ANTENA_PIC from '../../imgs/ANTENA_PIC.svg'
import DOOR_PIC from '../../imgs/DOOR_PIC.svg'
import TERMO_PIC from '../../imgs/TEMOMETRO_PIC.svg'
export const AlertContainer = () => {
    return (
        <div className='alert-list'>
            <Alert key={1} SVG={AC_POWER} TEXT={"MAIN POWER"} />
            <Alert key={3} SVG={BATERIA} TEXT={"BATTERY STATUS"} />
            <Alert key={2} SVG={DOOR_PIC} TEXT={"CABINET TEMPER"} />
            <Alert key={4} SVG={TERMO_PIC} TEXT={"TEMPERATURE"} />
            <Alert key={5} SVG={ANTENA_PIC} TEXT={"ANTENNA"} />
            <Alert key={6} SVG={BATERIA} TEXT={"ALERT#6"} />
            <Alert key={7} SVG={BATERIA} TEXT={"ALERT#7"} />

        </div>

    )
}

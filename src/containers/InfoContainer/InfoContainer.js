import React from 'react'
import { ButtonContainer } from '../ButtonContainer/ButtonContainer'
import './InfoContainer.css'
import RADIO_PICTURE from '../../imgs/RADIO_PIC.svg'
import VOL_PIC from '../../imgs/VOL_PIC.svg'
import MIC_PIC from '../../imgs/MIC_PIC.svg'
import { VolumeContainer } from '../VolumeContainer/VolumeContainer'
export const InfoContainer = ({ CHANNEL, STATUS, VOLUME }) => {
    return (
        <div className='container'>
            <p className='channel'>{CHANNEL}</p>
            <p className='status' style={{ color: (STATUS) ? '#20CE6E' : '#D9B03D' }}>{(STATUS) ? 'ACTIVE STATUS' : 'STANDBY STATUS'}</p>
            <img alt='icon' src={RADIO_PICTURE} />
            <ButtonContainer />
            {
                (VOLUME) ?
                    (
                        <section className='sound-section'>
                            <VolumeContainer icon={VOL_PIC} />
                            <VolumeContainer icon={MIC_PIC} />
                        </section>
                    )
                    : null
            }


        </div>
    )
}

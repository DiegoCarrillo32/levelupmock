import React, { useState } from 'react'
import { ButtonContainer } from '../ButtonContainer/ButtonContainer'
import './InfoContainer.css'
import RADIO_PICTURE from '../../imgs/RADIO_PIC.svg'
import VOL_PIC from '../../imgs/VOL_PIC.svg'
import MIC_PIC from '../../imgs/MIC_PIC.svg'
import { VolumeContainer } from '../VolumeContainer/VolumeContainer'
import { SoundButton } from '../../components/SoundButton/SoundButton'
export const InfoContainer = ({ CHANNEL, STATUS, VOLUME }) => {
    const [Mode, setMode] = useState("HANDHELD")
    const [Data, setData] = useState("OTHER")
    const [VolumeSpeaker, setVolumeSpeaker] = useState(10)
    const [VolumeAudio, setVolumeAudio] = useState(10)
    return (
        <div className='container'>
            <div style={{
                position: "absolute",
                width: "360px",
                height: "319px",
                zIndex: 1

            }}>
                <div className='mode-config'>
                    {Mode}
                </div>
                <div className='data-config'>
                    {Data}
                </div>
            </div>
            <p className='channel'>{CHANNEL}</p>
            <p className='status' style={{ color: (STATUS) ? '#20CE6E' : '#D9B03D' }}>{(STATUS) ? 'ACTIVE STATUS' : 'STANDBY STATUS'}</p>
            <img alt='icon' src={RADIO_PICTURE} className="icon-svg" />

            {
                <div className='sound-rectangle'>
                    {
                        (VOLUME) ? <ButtonContainer /> : null
                    }

                    <section className='sound-section'>
                        <VolumeContainer icon={VOL_PIC}>
                            <SoundButton title={'-'} onClickEvent={setVolumeSpeaker} />
                            <SoundButton title={"+"} onClickEvent={setVolumeSpeaker} effect />
                        </VolumeContainer>
                        <VolumeContainer icon={MIC_PIC} >
                            <SoundButton title={'-'} onClickEvent={setVolumeAudio} />
                            <SoundButton title={"+"} onClickEvent={setVolumeAudio} effect />
                        </VolumeContainer>
                    </section>
                    <section className='sound-section'>
                        <div className='test'>
                            <img src={VOL_PIC} alt="Vol" className='icon' />
                            <div className='volume-bar'>
                                <div className='volume-bar-inner' style={{ width: `${VolumeSpeaker}%` }}></div>
                            </div>
                        </div>
                        <div className='test'>
                            <img src={VOL_PIC} alt="Vol" className='icon' />
                            <div className='volume-bar'>
                                <div className='volume-bar-inner' style={{ width: `${VolumeAudio}%` }}></div>
                            </div>
                        </div>
                    </section>
                </div>
            }


        </div>
    )
}

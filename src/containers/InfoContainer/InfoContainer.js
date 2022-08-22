import React, { useState } from 'react'
import { ButtonContainer } from '../ButtonContainer/ButtonContainer'
import './InfoContainer.css'
import RADIO_PICTURE from '../../imgs/RADIO_PIC.svg'
import VOL_PIC from '../../imgs/VOL_PIC.svg'
import MIC_PIC from '../../imgs/MIC_PIC.svg'

import HANDSET from '../../imgs/HANDSET.svg'
import HANDSET_GREY from '../../imgs/HANDSET_NOCOLOR.svg'
import GOOD_SIGNAL from '../../imgs/GOOD_SIGNAL.svg'
import BAD_SIGNAL from '../../imgs/BAD_SIGNAL.svg'
import { VolumeContainer } from '../VolumeContainer/VolumeContainer'
import { SoundButton } from '../../components/SoundButton/SoundButton'
export const InfoContainer = ({ CHANNEL, VOLUME, SIGNAL }) => {
    const [PTT, setPTT] = useState(true)
    const [Failure, setFailure] = useState(true)

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
                    <div className='warning-section'>
                        <div style={{
                            display: "flex",
                            width: "12px",
                            height: "12px",
                            backgroundColor: (Failure) ? "#20CE6E" : "#D9B03C",
                            borderRadius: "50%",
                            alignSelf: "center",
                        }}></div>

                    </div>

                </div>
                <div className='data-config'>
                    <img src={SIGNAL ? GOOD_SIGNAL : BAD_SIGNAL} alt="SIGNAL" />
                </div>
                <div className='handset-config'>

                    <img src={PTT ? HANDSET : HANDSET_GREY} alt="handset button" />
                    <p style={{
                        color: (PTT ? "#20CE6E" : "#D9D9D9"),
                    }} > {PTT ? "PTT pressed on panel" : "PTT released"} </p>
                </div>
            </div>
            <p className='channel'>{CHANNEL}</p>
            <p className='status' style={{ color: (Failure) ? '#20CE6E' : '#D9B03D' }}>Standby - Normal</p>
            <img alt='icon' src={RADIO_PICTURE} className="icon-svg" />

            {
                <div className='sound-rectangle'>
                    {
                        (VOLUME) ? <ButtonContainer /> : null
                    }
                    <section className='sound-section'>
                        <div className='test'>

                            <div className='volume-bar'>
                                <div className='volume-bar-inner' style={{ width: `${VolumeSpeaker}%` }}></div>
                            </div>
                        </div>
                        <div className='test'>

                            <div className='volume-bar'>
                                <div className='volume-bar-inner' style={{ width: `${VolumeAudio}%` }}></div>
                            </div>
                        </div>
                    </section>
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

                </div>
            }


        </div >
    )
}

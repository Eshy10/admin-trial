import React, { useState, useEffect, useRef } from "react";

import {
    SoundBlock,
    SoundBlockContainer,
    IconBlock,
    Icon,
    Slider,
    FileName,
    Length,
    SubText
} from
    "./musicPlayer.styles";

import { formatTime } from "@/utils/timeUtils";

const MusicPlayer = ({ type, fileName, subText, length, name }) => {
    const [playing, setPlaying] = useState(false)
    const [sliderTime, setSliderTime] = useState(-100)

    if (type === 'Audio') {
        return (
            <SoundBlockContainer name={name}>
                <SoundBlock name={name}>
                    <IconBlock>
                        <Icon src="/assets/musicIcon.jpg" alt='music icon' />
                        {
                            playing ?
                                <Icon src="/assets/pause-line.svg" alt='pause voice note' onClick={() => setPlaying(false)} />
                                :
                                <Icon src="/assets/play-line.svg" alt='play voice note' onClick={() => setPlaying(true)} />
                        }
                    </IconBlock>
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                            <FileName>{fileName}</FileName>
                            <Length>{formatTime(length)}</Length>
                        </div>
                        <Slider
                            type="range"
                            min={0}
                            max={length}
                            newSearch={true}
                            profile={true}
                            value={sliderTime}
                            onChange={(e) => setSliderTime(e.target.value)}
                        />
                    </div>
                </SoundBlock>
                <Icon src="/assets/download.svg" alt='download' />
            </SoundBlockContainer>
        )
    }
    else if (type === 'Voice') {
        return (
            <SoundBlockContainer name={name}>
                <SoundBlock name={name}>
                    {
                        playing ?
                            <Icon src="/assets/pause-sound.svg" alt='pause voice note' onClick={() => setPlaying(false)} />
                            :
                            <Icon src="/assets/play-sound.svg" alt='play voice note' onClick={() => setPlaying(true)} />
                    }
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                            <FileName>{fileName}</FileName>
                            <Length>{formatTime(length)}</Length>
                        </div>
                        <SubText>{subText}</SubText>
                        <Slider
                            type="range"
                            min={0}
                            max={length}
                            newSearch={true}
                            profile={true}
                            value={sliderTime}
                            onChange={(e) => setSliderTime(e.target.value)}
                        />
                    </div>
                </SoundBlock>
                <Icon src="/assets/download.svg" alt='download' />
            </SoundBlockContainer>
        )
    }
    else {
        return null
    }
}

export default MusicPlayer;

import React, { useState, useEffect, useRef } from "react";

import {
    SoundBlock,
    PlayerContainer,
    IconBlock,
    Icon,
    Slider,
    FileName,
    Length,
    SubText,
} from
    "./videoPlayer.styles";

import { formatTime } from "@/utils/timeUtils";

const VideoPlayer = ({ length, playing, sliderTime, setSliderTime, setPlaying, mute, setMute }) => {
    return (
        <PlayerContainer>
            <Icon
                src={playing ? "/assets/pause-line.svg" : "/assets/play-line.svg"}
                alt={playing ? "pause video" : "play video"}
                onClick={() => setPlaying(p => !p)}
            />
            <Length>{formatTime(sliderTime)}</Length>
            <div style={{ display: 'flex', flex: 1 }}>
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
            <Length>{formatTime(length)}</Length>
            <Icon
                src={mute ? '/assets/speaker.svg' : '/assets/mute-speaker.svg'}
                alt={mute ? 'play sound' : 'mute sound'}
                onClick={() => setMute(m => !m)}
            />
            <Icon
                src="/assets/download-black.svg"
                alt='download'
            />
        </PlayerContainer>
    )
}

export default VideoPlayer;

import React, { useEffect, useRef, useState } from "react";
import { P } from "../typography";
import {
  Duration,
  DurationTop,
  Filename,
  FilenameSub,
  MusicCanvas,
  MusicCanvasContainer,
  MusicHeaderArea,
  MusicVisualizer,
  PlayIcon,
  Slider,
  SliderContainer,
  DropdownPlayRateIcon,
  SpeedDuration,
  SpeedRateWrapper,
  MusicDetailsWrapper,
  ModalPlayRate,
} from "@/components/musicPlayer/musicPlayer.styles";
import { waves } from "../../utils/waveforms";

function MusicPlayer({ filename, url, chat, newsearch, cat, newdsn, profile, chats }) {
  // Music Player State
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playRate, setPlayRate] = useState(1);
  const [showModalRate, setShowModalRate] = useState(false);

  const handleShowModalRate = () => setShowModalRate(!showModalRate);

  const musicSpeedRate = ["0.5", "1", "2"];

  const waveForm = useRef(null);
  const waveformRef = useRef(null);

  const MusicFilesFunc = async () =>  {
    const wavesurfer = (await import("wavesurfer.js")).default;
    waveForm.current = wavesurfer.create({
      container: waveformRef.current,
      waveColor: chat ? "#FFFFFF" : "#D9DCFF",
      progressColor: "#4353FF",
      cursorColor: "#4353FF",
      barWidth: 3,
      barRadius: 3,
      cursorWidth: 0,
      height: chat ? 50 : 65,
      barGap: 3,
      partialRender: true,
      responsive: true,
      xhr: {
        cache: "default",
        mode: "cors",
        method: "GET",
        credentials: "same-origin",
        redirect: "follow",
        referrer: "client",
      },
    });

    waveForm?.current?.load(
      url,
      waves
    );

    let intervalId;
    waveForm?.current?.on("ready", function () {
      // https://wavesurfer-js.org/docs/methods.html
      setLoading(false);
      setPlaying(waveForm?.current?.isPlaying());
      console.info("Loaded");
      setCurrentTime(waveForm?.current?.getCurrentTime());
      setDuration(waveForm.current.getDuration());
    });
    

    waveForm.current.on("loading", function () {
      setLoading(true);
    })

   waveForm.current.on("interaction", function () {
    setPlaying(waveForm.current.isPlaying());
    clearInterval(intervalId);
    setCurrentTime(waveForm.current.getCurrentTime());
  })

   waveForm.current.on("play", function () {
    setPlaying(waveForm.current.isPlaying());
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      setCurrentTime(waveForm.current.getCurrentTime());
    }, 1000);
  })

    waveForm.current.on("seek", function () {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        setCurrentTime(waveForm.current.getCurrentTime());
      }, 1000);
    });

    waveForm.current.on("pause", function () {
      setPlaying(waveForm.current.isPlaying());
      clearInterval(intervalId);
    })
  }

  useEffect(() => {
    MusicFilesFunc();
}, [url]);


  // Stop the audio when the component unmounts
  useEffect(() => {
    return () => {
      if (waveForm && waveForm?.current) {
        waveForm.current.pause();
      }

      console.info("in cleanup");
    };
  }, [url]);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60) || 0;
    const seconds = secs - minutes * 60 || 0;

    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const handlePlaying = async () => {
    await waveForm.current.playPause();
    setPlaying(waveForm.current.isPlaying());
  };

  function getSrc() {
    if (loading) {
      return "/assets/spinner.svg";
    }

    if (playing) {
      return "/assets/pause_now.svg";
    }

    return (chat ? "/assets/play-chat.svg" : "/assets/play_now.svg");
  }

  const playingAround = async (rate) => {
    await waveForm.current.setPlaybackRate(rate);
    setPlayRate(rate);
    handleShowModalRate();
  };

  return (
    <MusicVisualizer newsearch={newsearch} chat={chat}>
      <Filename newsearch={newsearch}>
        {filename}
      </Filename>
      {/*  Music Player */}
      <PlayIcon
          newsearch={newsearch}
          src={getSrc()}
          onClick={handlePlaying}
          chat={chat}
        />
      <MusicCanvasContainer newsearch={newsearch} chat={chat}>
        <MusicCanvas
          newsearch={newsearch}
          ref={waveformRef}
        />
        <MusicHeaderArea newsearch={newsearch}>
          <Filename  newsearchshow={newsearch}>
            {filename}
          </Filename>

          <DurationTop newdsn={newdsn} chat={chat}>
            {formatTime(Math.round(currentTime))}
          </DurationTop>
        </MusicHeaderArea>
        <FilenameSub newsearch={newsearch}>{cat}</FilenameSub>
        <SliderContainer chat={chat}>
          <Duration  newsearch={newsearch} chat={chat}>
            {formatTime(Math.round(currentTime))}
          </Duration>
          <Slider
            type="range"
            min="1"
            max={duration}
            newsearch={newsearch} 
            profile={profile}
            value={currentTime}
            onChange={(event) => {
              waveForm.current.seekTo(event.target.value / duration);
            }}
          />
          <Duration newsearch={newsearch} chat={chat}>
            {formatTime(Math.round(duration))}
          </Duration>
        </SliderContainer>
      </MusicCanvasContainer>
      <MusicDetailsWrapper chats={chats}>
        {/* <SpeedDuration chat>{formatTime(Math.round(currentTime))}</SpeedDuration> */}
        <SpeedRateWrapper>
          <P color={"#9A9A9A"}>{`${playRate}x`}</P>
          <DropdownPlayRateIcon onClick={handleShowModalRate} />
        </SpeedRateWrapper>
        {showModalRate && (
          <ModalPlayRate>
            {musicSpeedRate.map((rate, index) => (
              <P
                key={index}
                onClick={() => playingAround(rate)}
              >{`${rate}x`}</P>
            ))}
          </ModalPlayRate>
        )}
      </MusicDetailsWrapper>
    </MusicVisualizer>
  );
}

export default MusicPlayer;

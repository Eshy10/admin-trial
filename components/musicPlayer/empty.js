import React from "react";
import {
  Duration,
  Filename,
  MusicCanvas,
  MusicCanvasContainer,
  MusicVisualizer,
  Slider,
  PlayIcon,
  SliderContainer,
  FilenameSub,
  MusicHeaderArea,
} from "@/components/musicPlayer/musicPlayer.styles";

function MusicPlayerEmpty({ filename, emptymusic, newdsn }) {
  // Music Player State
  const loading = false;

  function getSrc() {
    if (loading && emptymusic) {
      return "/assets/play_not.svg";
    }
    return "/assets/play_not.svg";
  }

  return (
    <MusicVisualizer emptymusic={emptymusic}>
      <Filename emptymusic={emptymusic}>{filename}</Filename>
      {/*  Music Player */}
      <PlayIcon emptymusic={emptymusic} src={getSrc()} />
      <MusicCanvasContainer emptymusic={emptymusic}>
        <MusicCanvas emptymusic={emptymusic} />
        <MusicHeaderArea emptymusic={emptymusic}>
          <Filename newemptymusic={emptymusic}>{filename}</Filename>
          <Duration newdsn={newdsn}>0:00</Duration>
        </MusicHeaderArea>

        <FilenameSub emptymusic={emptymusic}>Not Available</FilenameSub>
        <SliderContainer>
          <Slider
            type="range"
            min="0"
            max={100}
            value={0}
            emptymusic={emptymusic}
          />
        </SliderContainer>
      </MusicCanvasContainer>
    </MusicVisualizer>
  );
}

export default MusicPlayerEmpty;

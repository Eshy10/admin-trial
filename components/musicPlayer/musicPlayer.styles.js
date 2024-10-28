import styled from "styled-components";

const MusicVisualizer = styled.div`
  width: 100%;
  height: ${({ chat }) => (chat ? "58px" : "6rem")};
  height: ${({ newsearch, emptymusic }) =>
  newsearch || emptymusic ? "4.025rem" : ""};
  display: flex;
  position: relative;
  padding-bottom: 0.5rem;
  padding-right: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #eeefff;
  @media screen and (max-width: 48em) {
    height: ${({ chat }) => (chat ? "51px" : "")};
  }
  background-color: ${({ emptymusic }) => (emptymusic ? "#f5f5f5" : "")};

  @media screen and (max-width: 25.875em) {
    padding: ${({ newsearch, emptymusic }) =>
    newsearch || emptymusic ? "1.5rem 1rem 1.8rem .1rem" : ""};
  }
`;

const FilenameSub = styled.span`
  display: ${({ newsearch, emptymusic }) =>
  newsearch || emptymusic ? "block" : "none"};
  flex-grow: 0;
  font-family: Poppins;
  font-size: 0.5rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  /* text-align: left; */
  margin: -0.5rem 0 0.2rem 1rem;
  color: #d2d2d2;
`;

const Filename = styled.p`
  font-family: Poppins, serif;
  font-size: 1vw;
  font-size: ${({ newsearchshow, newemptymusic }) =>
  newsearchshow || newemptymusic ? "0.625rem" : ""};
  max-width: 40vw;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #3e46b6;
  color: ${({ newsearchshow }) => (newsearchshow ? "#484848" : "")};
  color: ${({ newemptymusic }) => (newemptymusic ? "#484848" : "")};
  word-wrap: break-word;
  white-space: nowrap;

  display: ${({ newsearch, emptymusic }) =>
  newsearch || emptymusic ? "none" : ""};
  display: ${({ newsearchshow, newemptymusic }) =>
  newsearchshow || newemptymusic ? "block" : ""};
  margin: ${({ newsearchshow, newemptymusic }) =>
  newsearchshow || newemptymusic ? "0 0 0.5rem 1rem" : ""};

  /* overflow: ${({ newsearchshow }) => (newsearchshow ? "hidden" : "")};
  white-space: ${({ newsearchshow }) => (newsearchshow ? "nowrap" : "")}; */

  @media screen and (max-width: 25.875em) {
    max-width: ${({ newsearchshow, newemptymusic }) =>
    newsearchshow || newemptymusic ? "100%" : ""};
  }
`;

const MusicCanvasContainer = styled.div`
  width: 100%;
  height: ${({ chat }) => (chat ? "50px" : "5.5rem")};
  border-radius: 10px;
  background-color: ${({ chat }) => (chat ? "#eeefff" : "")};
  height: ${({ newsearch, emptymusic }) =>
  newsearch || emptymusic ? "2.5rem" : ""};
  margin-top: ${({ newsearch, emptymusic }) =>
  newsearch || emptymusic ? ".5rem" : ""};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 48em) {
    height: ${({ chat }) => (chat ? "43px" : "")};
  }
`;

const MusicCanvas = styled.div`
  height: 80%;
  display: ${({ newsearch, emptymusic }) =>
  newsearch || emptymusic ? "none" : ""};
  width: 100%;
  margin-top: 0.2rem;
`;

const PlayIconStyles = styled.img`
  cursor: pointer;
  width: ${({ chat }) => (chat ? "24px" : "2rem")};
  height: ${({ chat }) => (chat ? "24px" : "2rem")};
  margin-right: 2vw;
  margin-left: 2vw;
  @media screen and (max-width: 26.5625em) {
    margin-left: 2vw;
  }
`;

//  display: ${({chat}) => (chat ? "none" : "block")};

const PlayIcon = styled(PlayIconStyles).attrs({
  alt: "Play Icon",
})`
  width: ${({ newsearch, emptymusic }) =>
  newsearch || emptymusic ? "1.5rem" : ""};
  height: ${({ newsearch, emptymusic }) =>
  newsearch || emptymusic ? "1.5rem" : ""};
  margin-right: ${({ newsearch, emptymusic }) =>
  newsearch || emptymusic ? ".1rem" : ""};
  margin-left: ${({ newsearch, emptymusic }) =>
  newsearch || emptymusic ? "1rem" : ""};
  margin-top: ${({ chat }) => (chat ? ".5rem" : "")};
`;

const SliderContainer = styled.div`
  display: ${({ chat }) => (chat ? "none" : "flex")};
  align-items: center;
`;

const Slider = styled.input`
  width: 100%;
  height: 0.125rem;
  margin-left: 3.5%;
  margin-right: 2.5%;
  -webkit-appearance: none;
  outline: none !important;
  appearance: none;
  border: none;
  margin-top: 0.6rem;

  /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */

  /*remove default tick marks*/
  color: transparent;

  ::-moz-range-progress {
    background: rgba(62, 70, 182, 0.7);
    background: ${({ newsearch }) =>
    newsearch ? "rgba(54, 215, 255, 0.7)" : ""};
    background: ${({ emptymusic }) =>
    emptymusic ? "rgba(210, 210, 210, 0.7)" : ""};
  }

  ::-moz-range-track {
    background: rgba(62, 70, 182, 0.3);
    background: ${({ newsearch }) =>
    newsearch ? "rgba(54, 215, 255, 0.3)" : ""};
    background: ${({ emptymusic }) =>
    emptymusic ? "rgba(210, 210, 210, 0.3)" : ""};
  }

  ::-ms-fill-lower {
    background: rgba(62, 70, 182, 0.7);
    background: ${({ newsearch }) =>
    newsearch ? "rgba(54, 215, 255, 0.7)" : ""};
    background: ${({ emptymusic }) =>
    emptymusic ? "rgba(210, 210, 210, 0.7)" : ""};
  }

  ::-ms-fill-upper {
    background: rgba(62, 70, 182, 0.3);
    background: ${({ newsearch }) =>
    newsearch ? "rgba(54, 215, 255, 0.3)" : ""};
    background: ${({ emptymusic }) =>
    emptymusic ? "rgba(210, 210, 210, 0.3)" : ""};
  }

  :focus::-ms-fill-lower {
    background: rgba(62, 70, 182, 0.8);
    background: ${({ newsearch }) =>
    newsearch ? "rgba(54, 215, 255, 0.8)" : ""};
    background: ${({ emptymusic }) =>
    emptymusic ? "rgba(210, 210, 210, 0.8)" : ""};
  }

  :focus::-ms-fill-upper {
    background: rgba(62, 70, 182, 0.4);
    background: ${({ newsearch }) =>
    newsearch ? "rgba(54, 215, 255, 0.4)" : ""};
    background: ${({ emptymusic }) =>
    emptymusic ? "rgba(210, 210, 210, 0.4)" : ""};
  }

  ::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: rgba(62, 70, 182, 0.3);
    background: ${({ newsearch }) =>
    newsearch ? "rgba(54, 215, 255, 0.3)" : ""};
    background: ${({ emptymusic }) =>
    emptymusic ? "rgba(210, 210, 210, 0.3)" : ""};
    border: none;
    border-radius: 3px;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    height: 16px;
    height: ${({ newsearch, emptymusic }) =>
    newsearch || emptymusic ? "0.563rem" : ""};
    width: 16px;
    width: ${({ newsearch, emptymusic }) =>
    newsearch || emptymusic ? "0.563rem" : ""};
    border-radius: 50%;
    background: #3e46b6;
    background: ${({ newsearch }) => (newsearch ? "#36d7ff" : "")};
    background: ${({ emptymusic }) => (emptymusic ? "#d2d2d2" : "")};
    margin-top: -4px;
    margin-top: ${({ newsearch, emptymusic }) =>
    newsearch || emptymusic ? "-2px" : ""};
    outline: none;
  }

  :focus {
    outline: none;
  }

  :focus::-webkit-slider-runnable-track {
    background: rgba(62, 70, 182, 0.4);
    background: ${({ newsearch }) =>
    newsearch ? "rgba(54, 215, 255, 0.4)" : ""};
    background: ${({ emptymusic }) =>
    emptymusic ? "rgba(210, 210, 210, 0.4)" : ""};
  }
  @media screen and (max-width: 26.5625em) {
      margin-top: 0.3rem;
  }
  @media screen and (max-width: 20em) {
     margin-top: 0.3rem;
  }
`;

const Duration = styled.p`
  display: ${({ chat }) => (chat ? "none" : "block")};
  display: ${({ newsearch, emptymusic }) =>
  newsearch || emptymusic ? "none" : ""};
  max-width: ${({ chat }) => (chat ? "" : "5%")};
  margin-top: ${({ chat }) => (chat ? "0rem !important" : "")};
  opacity: 0.54;
  font-family: Poppins, serif;
  font-size: 0.75rem;
  font-size: ${({ newdsn }) => (newdsn ? "0.5rem" : "")};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #484848;

  @media screen and (max-width: 26.5625em) {
    margin-right: 1rem;
  }
`;

const SpeedDuration = styled.p`
  opacity: 0.54;
  font-family: Poppins, serif;
  font-size: 0.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #484848;
  margin-top: 0rem !important;
`;

const DurationTop = styled.p`
  display: ${({ chat }) => (chat ? "none" : "")};
  color: ${({ newdsn }) => (newdsn ? "#bdbdbd" : "")};
  opacity: 0.54;
  font-family: Poppins, serif;
  font-size: 0.75rem;
  font-size: ${({ newdsn }) => (newdsn ? "0.5rem" : "")};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #484848;
  margin-top: 0rem !important;
`;

const SpeedRateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  p {
    font-weight: 500;
    font-size: 0.5rem;
    line-height: 18px;
    color: #484848;
    margin-top: 0rem !important;
  }
`;

const DropdownPlayRateIcon = styled.img.attrs({
  src: "/assets/caret-down-blue.svg",
  alt: "cancel icon",
})`
  cursor: pointer;
  margin-left: 0.3rem;
`;

const MusicDetailsWrapper = styled.div`
  display: ${({ chats }) => (chats ? "flex" : "none")};
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ModalPlayRate = styled.div`
  width: 65px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 70px;
  right: 10px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 4px 4px #f2f2f2;
  border-radius: 10px;
  z-index: 500;
  p {
    width: 100%;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 21px;
    text-align: center;
    color: #2b2626;
    cursor: pointer;
  }
  p:hover {
    background-color: #eeefff;
    font-weight: 500;
  }

  @media screen and (max-width: 26.5625em) {
    margin-right: 1rem;
  }
`;

const MusicHeaderArea = styled.div`
  display: ${({ newsearch, emptymusic }) =>
  newsearch || emptymusic ? "flex" : "none"};
  justify-content: space-between;
`;

export {
  MusicVisualizer,
  Filename,
  MusicCanvasContainer,
  MusicHeaderArea,
  MusicCanvas,
  PlayIcon,
  SliderContainer,
  Slider,
  Duration,
  DropdownPlayRateIcon,
  SpeedDuration,
  SpeedRateWrapper,
  MusicDetailsWrapper,
  ModalPlayRate,
  FilenameSub,
  DurationTop,
};

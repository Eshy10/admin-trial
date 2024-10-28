import styled from 'styled-components';
import { display, space, width } from "styled-system";

const PlayerContainer = styled.div` 
    display: flex;
    align-items: center;
    border-radius: 15px;
    background: #EEEFFF;
    padding: 14px 20px;
    gap: 24px;
    width: 80%;

    @media (max-width: 990px) {
        width: 100%;
        gap: 10px;
    }
`

const Icon = styled.img.attrs(({ src, alt, color = '#fff' }) => ({
  src: src,
  alt: alt
}))`
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background-color: ${props => props.color};
    cursor: pointer;
  `;

const Length = styled.span`
  color: var(--Neutral4, #454843);
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Slider = styled.input`
  width: 100%;
  height: 3px;
  -webkit-appearance: none;
  outline: none !important;
  appearance: none;
  border: none;
  background: #FFF;

  color: transparent;

  ::-moz-range-progress {
    background: #36d7ff;
  }

  ::-moz-range-track {
    background: #FFF;
  }

  ::-ms-fill-lower {
    background: #36d7ff;
  }

  ::-ms-fill-upper {
    background: #FFF;
  }

  :focus::-ms-fill-lower {
    background: #36d7ff;
  }

  :focus::-ms-fill-upper {
    background: #ffffff;
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    background: #36d7ff;
    border-radius: 3px;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    height: 1px;
    width: 16px;
    border-radius: 50%;
    background: #36d7ff;
    margin-top: -4px;
    outline: none;
  }

  :focus {
    outline: none;
  }

  :focus::-webkit-slider-runnable-track {
    background: #36d7ff;
  }
`;

export {
  PlayerContainer,
  Icon,
  Slider,
  Length
}
import styled from 'styled-components';
import { display, space, width } from "styled-system";

const SoundBlockContainer = styled.div` 
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.name !== 'You' ? 'row' : 'row-reverse')};
    gap: 10px;
    width: 411px;

    @media (max-width: 1200px) {
        width: 100%;
    }

    @media (max-width: 990px) {
        width: 411px;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`
const IconBlock = styled.div`
     display: flex; 
     align-items: center;
     gap: 10px;

    @media (max-width: 990px) {
        gap: 5px;
    }

    & > :last-child {
        margin-top: 15px;
      }

     @media (max-width: 990px) {
        & > :last-child {
            margin-left: -5px;
          }
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

const FileName = styled.span`
    color: #484848;

    font-family: Poppins;
    font-size: ${(props) => props.type === 'Voice' ? '10px' : '12px'};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const Length = styled.span`
    color: #BDBDBD;

    font-family: Poppins;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const SubText = styled.span`
    color: #D2D2D2;

    font-family: Poppins;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;


const SoundBlock = styled.span`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${(props) => (props.name !== 'You' ? 'rgb(214, 255, 251)' : '#EEEFFF')};
    gap: 10px;
    padding: 15px;
    border-radius: 15px;
`

const Slider = styled.input`
  width: 100%;
  height: 3px;
  -webkit-appearance: none;
  outline: none !important;
  appearance: none;
  border: none;
  background: #FFF;
  margin-top: 8px;

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
    SoundBlock,
    SoundBlockContainer,
    IconBlock,
    Icon,
    Slider,
    FileName,
    SubText,
    Length
}
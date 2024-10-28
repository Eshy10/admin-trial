import styled from 'styled-components';
import { display, space, width } from "styled-system";

const MessageDataBlock = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    border-radius: 20px; 
    cursor: pointer;
    background: ${(props) => (props.$isSelected ? 'var(--Neutral-Variant3, #F2F2F2)' : 'transparent')};

    position: relative;
`

const ActiveDot = styled.span`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    height: 15px;
    background: radial-gradient(circle at center, #58CA59 50%,  #fff 50%);
    border-radius: 15px;
    border: 3px #000;
`

const MessageData = styled.div` 
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`

const LastMessage = styled.span`
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 190px;

    color: var(--Neutral4, #454843);
    /* Paragraph 2 */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.652px; /* 161.8% */
    letter-spacing: 0.28px;

    @media (max-width: 990px) {
        width: 80%;
    }

    @media (max-width: 550px) {
        width: 190px;
    }
`

const IconBlock = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const TypeIcon = styled.img.attrs(({ type }) => ({
    src: (type === 'Video' ? '/assets/video.svg' : type === 'Photo' ? '/assets/photo.svg' : type === 'Audio' ? '/assets/headphone.svg' : type === 'Voice' ? '/assets/microphone.svg' : '/assets/doc.svg'),
    alt: `${type} Icon`
}))`
    width:  20px;
    height: 20px;
    `;

const IconDescription = styled.span`
    color: #454843;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.652px;
    letter-spacing: 0.28px;
`

const TypingMessage = styled.span`
    color: #2AA836;
    width: 190px;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.652px;
    letter-spacing: 0.28px;
`

const NameBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Unread = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 10px;
    bottom: 10px;
    
    width: 20px;
    height: 20px;
    border-radius: 20px;

    background-color: #BE4645;
    
    color: #FFF;
    text-align: center;

    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px; 
    letter-spacing: 0.24px;
`

const Name = styled.span`
    color: var(--Neutral5, #012);
    /* Heading 3 */
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 24.27px; /* 161.8% */
    letter-spacing: 0.3px;
`

const DateBlock = styled.span`
    color: var(--Neutral5, #012);
    text-align: right;
    /* Paragraph 1 */
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px; /* 161.8% */
    letter-spacing: 0.24px;
`

export {
    MessageDataBlock,
    ActiveDot,
    MessageData,
    LastMessage,
    IconBlock,
    TypeIcon,
    IconDescription,
    TypingMessage,
    Unread,
    NameBlock,
    Name,
    DateBlock,
}
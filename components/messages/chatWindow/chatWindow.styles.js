import styled from 'styled-components';
import { display, space, width } from "styled-system";
import { Icon } from '../musicPlayer/musicPlayer.styles';

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

const Chat = styled.div`
    max-height: 100%;
    flex: 1;
    overflow-y: auto;
    scrollbar-width: thin; /* Firefox */
    -webkit-scrollbar-width: thin; /* Webkit-based browsers */
    scrollbar-color: transparent transparent; /* Firefox */
    -webkit-scrollbar-color: transparent transparent; /* Webkit-based browsers */

    /* For Webkit-based browsers */
    &::-webkit-scrollbar {
    width: 6px;
    }

    &::-webkit-scrollbar-thumb {
    background-color: transparent;
    }
    height: 100%;

    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 55px;
`

const ChatDate = styled.span`
    display: inline !important;
    float: center;
    width: auto;
    padding: 5px 10px;
    border-radius: 94px;
    background: var(--Neutral-Variant3, #F2F2F2);

    margin-top: 20px;
    margin-bottom: 30px;

    color: var(--Neutral5, #012);
    text-align: center;
    /* Paragraph 1 */
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px; /* 161.8% */
    letter-spacing: 0.24px;
`

const MessageBlock = styled.div`
    width: 60%;

    align-self: ${(props) => (props.name !== 'You' ? 'flex-start' : 'flex-end')};
    padding: 0 20px 0 20px;
    margin-bottom: 30px;

    display: flex;
    flex-direction: ${(props) => (props.name !== 'You' ? 'row' : 'row-reverse')};
    gap: 20px;

    @media (max-width: 1200px) {
        width: 100%;
    }
`

const ContentContainer = styled.div`
    align-items: ${(props) => (props.name !== 'You' ? 'flex-start' : 'flex-end')};
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ContentBlock = styled.span`
    display: flex;
    flex-wrap: wrap;
    background-color: ${(props) => (props.name !== 'You' ? '#D6FFFB' : '#DADDFB')};
    padding: 15px;
    border-radius: 10px;

    & > * {
    margin: 0;
    }
`

const MultimediaBlock = styled.div`
    position: relative;
    background-color: ${(props) => (props.name !== 'You' ? '#D6FFFB' : '#DADDFB')};
    border-radius: 20px;
    display: flex;
    width: 100%;
    height: 100%;
    cursor: pointer;
`

const Photo = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'Photo'
}))`
    max-width: 286px;
    max-height: 300px;
    border-radius: 20px;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const PhotoIcon = styled.img.attrs(() => ({
    src: '/assets/photoIcon.svg',
    alt: 'Photo Icon'
}))`
    width: 24px;
    height:24px;

    position: absolute;
    bottom: 20px;
    left: 20px;
`;

const VideoInfo = styled.div`
    display: flex;
    gap: 10px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    justify-content: center;
    align-items: center;
`;

const VideoIcon = styled.img.attrs(() => ({
    src: '/assets/videoIcon.svg',
    alt: 'Video Icon'
}))`
    width: 24px;
    height:24px;
`;

const VideoLength = styled.span`
    color: var(--Neutral-Variant1, #FFF);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const DocumentContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.name !== 'You' ? 'row' : 'row-reverse')};
    gap: 10px;
`;

const DocumentMainBlock = styled.div`
    background-color: ${(props) => (props.name !== 'You' ? '#D6FFFB' : '#DADDFB')};
    padding: 20px;
    align-items: center;
    border-radius: 20px;
    display: flex;
    width: 240px;
    justify-content: space-between;
    height: 100%;
`
const FileName = styled.span`
    color: #484848;

    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;

    display: block;
    overflow: wrap;
    width: 80%;
`;

const DocumentIcon = styled.img.attrs(() => ({
    src: "/assets/doc.svg",
    alt: 'document icon'
}))`
    width: 24px;
    height:24px;
`;

const DocumentBlock = ({ name, fileName }) => {
    return (
        <DocumentContainer name={name} >
            <DocumentMainBlock name={name}>
                <DocumentIcon />
                <FileName>{fileName}</FileName>
            </DocumentMainBlock>
            <Icon src="/assets/download.svg" alt='download' />
        </DocumentContainer>
    )
}

export {
    Name,
    DateBlock,
    Chat,
    ChatDate,
    MessageBlock,
    ContentBlock,
    MultimediaBlock,
    Photo,
    PhotoIcon,
    VideoInfo,
    VideoIcon,
    VideoLength,
    ContentContainer,
    DocumentBlock
}
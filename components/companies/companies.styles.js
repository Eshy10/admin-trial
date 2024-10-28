import styled from "styled-components";
import { display, space, width } from "styled-system";

const Wrapper = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-bottom: 64px;

    @media (max-width: 600px) {
        gap: 20px;
    }
`

const Icon = styled.img.attrs((props) => ({
    src: props.src,
    alt: props.alt,
}))`
    height: ${(props) => (props.$hw ? props.$hw : "20px")};
    width: ${(props) => (props.$hw ? props.$hw : "20px")};
`;

const Button = styled.button`
    width: fit-content;
    display: flex;
    padding: 15px 30px;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    gap: 10px;
    border-radius: 100px;
    background: var(--Primary5, #3E46B6);
    border: none;
    cursor: pointer;

    color: var(--Neutral-Variant1, #FFF);
    text-align: center;
    /* Button */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px; /* 161.8% */
    letter-spacing: 0.7px;
`

const AddButton = ({ children }) => (
    <Button>
        <Icon src="/assets/add-line.svg" alt="Add Icon" />
        {children}
    </Button>
)

const Cards = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;

    @media screen and (max-width: 768px){
        flex-wrap: wrap;
    }
`

const Card = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 20px;
    height: 144px;
    justify-content: space-between;
    border-radius: 10px;
    background: ${(props) => props.color};

    > :first-child {
        display:flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            color: var(--Neutral5, #012);

            font-family: Poppins;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: 24.27px; /* 161.8% */
            letter-spacing: 0.3px;

            margin: 0px;
        }
    }

    span {
        color: var(--Neutral5, #012);

        font-family: Poppins;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 48.54px; /* 161.8% */
        letter-spacing: 0.6px;
    }
`

const InfoCard = ({ text, color, figure }) => {
    let bgColor = ''
    let alt = ''
    let src = ''
    if (color === 'blue') {
        bgColor = "#DADDFB"
        alt = "Company Logo"
        src = "/assets/disc-line-blue.svg"
    }
    else if (color === 'yellow') {
        bgColor = '#FFF5D0'
        alt = "Contract Logo"
        src = "/assets/file-list-line.svg"
    }
    else {
        return null
    }
    return (
        <Card color={bgColor}>
            <div>
                <h1>{text}</h1>
                <Icon src={src} alt={alt} />
            </div>
            <span>{figure}</span>
        </Card>
    )
}

const ListContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid var(--Neutral1, #E2E3DD);

    @media (max-width: 760px) {
        border: 0;
        margin-top: 12px;
        padding: 0;
        gap: 20px;
    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    align-items: flex-start;

    color: var(--Neutral5, #012);
    /* Headline 4 */
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32.36px; /* 161.8% */
    letter-spacing: 0.4px;

    margin-bottom: 20px;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 16px;
        margin-bottom: 4px;
    }
`

export {
    Wrapper,
    AddButton,
    Button,
    Cards,
    InfoCard,
    ListContainer,
    Header,
    Icon,
}
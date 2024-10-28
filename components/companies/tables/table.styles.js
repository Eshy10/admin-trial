import styled from "styled-components";
import { display, space, width } from "styled-system";
import { Icon } from "../companies.styles";
import { useState, useEffect } from "react";
import { getFormattedDate, getTimeLeft } from "@/utils/timeUtils";

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-bottom: 1px solid #E2E3DD;

    th, td {
        padding: 12px;
        text-align: left;
        border-top: 1px solid #E2E3DD;
    }

    th {
        color: var(--Neutral5, #012);

        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22.652px; /* 161.8% */
        letter-spacing: 0.28px;

        height: 63px;
    }

    td {
        color: var(--Neutral5, #012);

        font-family: Poppins;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 24.27px; /* 161.8% */
        letter-spacing: 0.3px;

        height: 70px;
    }

    @media (max-width: 1100px) and (min-width: 990px), (max-width: 850px) {
        th, td {
            padding: 12px 5px;
        }
    }    

    @media (max-width: 760px) {
        display: none;
    }
`;

const TableSkeleton = ({ children, headings }) => {
    return (
        <Table>
            <thead>
                <tr>
                    {
                        headings.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </Table>
    )
}

const CompanyNameTd = styled.td`
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: none;
`;

const TableIcon = styled(Icon)`
    border-radius: 20px;
    width: ${(props) => props.$hw});
    height: ${(props) => props.$hw});
`

const TimeLeftContainer = styled.div`
    display: flex;
    padding: 5px 10px;
    align-items: center;
    gap: 5px;
    width: fit-content;
    border-radius: 100px;
    background: var(--Gray-6, #F2F2F2);

    color: var(--Gray-2, #4F4F4F);
    /* Paragraph 3 */
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px; /* 161.8% */
    letter-spacing: 0.3px;
    flex-wrap: nowrap;
    white-space: nowrap;
`

const TimeLeft = ({ children }) => (
    <TimeLeftContainer>
        <Icon src="/assets/bxs-time-five.svg.svg" alt="timer" $hw="18px" />
        {children}
    </TimeLeftContainer>
)

const CompaniesTableItem = ({ id, index, name, logo, onboardingDate, contractLength, licenseCount }) => {
    const formattedDate = getFormattedDate(onboardingDate)

    const [timeLeft, setTimeLeft] = useState(getTimeLeft(onboardingDate, contractLength))
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(getTimeLeft(onboardingDate, contractLength))
        }, 60000);

        return () => {
            clearTimeout(timer); // Corrected cleanup function
        };
    }, []);

    return (
        <tr>
            <td>{index}</td>
            <CompanyNameTd>
                <TableIcon src={logo} alt="company logo" />{name}
            </CompanyNameTd>
            <td>{formattedDate}</td>
            <td>{`${contractLength} Months`}</td>
            <td>{licenseCount}</td>
            <td>
                <TimeLeft>{timeLeft}</TimeLeft>
            </td>
            <td>
                <a style={{ color: "#3E46B6" }} href={`/companies/${id}`}>
                    View
                </a>
            </td>
        </tr >
    )
}

const IndexContainer = styled.div`
    padding-top: 5.6px;
    margin-bottom: -14.4px;
`

const UserNameTd = styled(CompanyNameTd)`
    align-items: flex-start;
`

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;

    color: var(--Neutral5, #012);

    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24.27px; /* 161.8% */
    letter-spacing: 0.3px;

    span {
        color: var(--Neutral4, #454843);
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 19.416px; /* 161.8% */
        letter-spacing: 0.24px;
    }

    @media (max-width: 760px) {
        font-size: 14px;
        line-height: 22.652px; /* 161.8% */
        letter-spacing: 0.28px;

        span {
            font-size: 12px;
            line-height: 19.416px; /* 161.8% */
            letter-spacing: 0.24px;
        }
    }
`

const UsersTableItem = ({ index, profilePicture, name, handle, role, dateJoined, addedBy }) => {
    const formattedDate = getFormattedDate(dateJoined)
    return (
        <tr>
            <td>{index}</td>
            <UserNameTd>
                <TableIcon src={profilePicture} alt="Profile Picture" />
                <DetailsContainer>
                    {name}
                    <span>{handle}</span>
                </DetailsContainer>
            </UserNameTd>
            <td style={{ color: role === 'Admin' ? '#0670DB' : 'inherit' }}>{role}</td>
            <td>{formattedDate}</td>
            <td>{addedBy}</td>
        </tr >
    )
}

const EmptyResult = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text: center;
    margin: auto;
    height: 300px;
    align-self: center;
`

const OuterCard = styled.main`
    display: none;

    @media (max-width: 760px) {
        display: flex;
        padding: 15px;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        width: 100%;
    
        border-radius: 10px;
        border: 1px solid var(--Neutral1, #E2E3DD);
    }
`

const StyledRow = styled.div`
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    gap: 15px;
    border-bottom: 1px solid #E2E3DD;
    padding-bottom: 15px;
    width: 100%;
`;

const Columns = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    span{
        width: 49%;
        color: var(--Neutral5, #012);
        /* Paragraph 3 */
        font-family: Poppins;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 24.27px; /* 161.8% */
        letter-spacing: 0.3px;
    }

    > :first-child {
        width: 48%;
        font-size: 14px;
        font-weight: 500;
        line-height: 22.652px;
        letter-spacing: 0.28px;
    }
`;

const CompanyNameSpan = styled.span`
    display: flex;
    gap: 10px;
    align-items: center;
`

const UserNameSpan = styled.span`
    display: flex;
    gap: 5px;
`

const LowerSection = styled.div`  
    display: flex;
    gap: 15px;
    width: fit-content;

    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px; /* 161.8% */
    letter-spacing: 0.3px;

    a {
        color: var(--Primary5, #3E46B6);
    }

    span {
        color: var(--Error3, #DE786D);
    }
`

const CardTable = ({ children, headings }) => {
    return (
        <OuterCard>
            <StyledRow>
                {headings.map((h, i) => (
                    <Columns key={i}>
                        <span>{h}</span>
                        {children[i]}
                    </Columns>
                ))}
            </StyledRow>
            <LowerSection>
                {
                    children.slice(headings.length, children.length).map((c) =>
                        c
                    )
                }
            </LowerSection>
        </OuterCard>
    );
};

export {
    TableSkeleton,
    CompaniesTableItem,
    UsersTableItem,
    IndexContainer,
    EmptyResult,
    TableIcon,
    CardTable,
    CompanyNameSpan,
    TimeLeft,
    DetailsContainer,
    UserNameSpan
}
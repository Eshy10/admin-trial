import styled from "styled-components";
import { display, space, width } from "styled-system";
import { Icon, Button } from "../companies.styles";
import { getFormattedDate, getTimeLeft } from "@/utils/timeUtils";
import { useEffect, useState } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid var(--Neutral1, #E2E3DD);
    gap: 20px;

    @media screen and (max-width: 600px) {
        padding: 15px;
    }
`

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    align-items: center;

    margin-bottom: -30px;

    @media screen and (max-width: 600px) {
        margin-bottom: 15px;
    }
`

const Link = styled.a`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: fit-content

    color: var(--Neutral5, #012);

    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px; /* 161.8% */
    letter-spacing: 0.7px;
`

const WhiteButton = styled.button`
    border-radius: 100px;
    border: 1px solid var(--Error3, #DE786D);
    background: var(--Neutral-Variant1, #FFF);
    width: fit-content;

    display: flex;
    padding: 15px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: var(--Error3, #DE786D);

    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px; /* 161.8% */
    letter-spacing: 0.7px;
    cursor: pointer;

    @media screen and (max-width: 600px) {
        display: none;
      }
`

const BackButton = () => (
    <Link href="/companies">
        <Icon
            src="/assets/arrow-left-black.svg"
            alt="Back icon"
        />
        Back to Company List
    </Link>
)

const RemoveCompany = ({ handleClick }) => (
    <WhiteButton onClick={handleClick}>
        <Icon
            src="/assets/delete-bin-line.svg"
            alt="Back icon"
        />
        REMOVE COMPANY
    </WhiteButton>
)

const PictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--Neutral5, #012);
    /* Heading 4 */
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32.36px; /* 161.8% */
    letter-spacing: 0.4px;
`

const DisplayPicture = ({ src, name, isMobile }) => (
    <PictureContainer>
        <Icon src={src} alt="Company Logo" $hw={`${isMobile ? 48 : 120}px`} />
        {name}
    </PictureContainer>
)

const Details = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        gap: 15px;
    }
`

const Detail = styled.span`
    color: var(--Neutral5, #012);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32.36px; /* 161.8% */
    letter-spacing: 0.4px;

    > :first-of-type {
        font-weight: 700;
    }

    @media screen and (max-width: 768px) {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.28px;
    }
`;

const CompanyDetails = ({ projectNo, licenseCount, usedLicenses }) => (
    <Details>
        <Detail>
            <span>{projectNo}</span> Projects
        </Detail>
        <Detail>
            <span>{licenseCount}</span> Total No of Licenses
        </Detail>
        <Detail>
            <span>{usedLicenses}</span> No of Licenses In Use
        </Detail>
    </Details>
);

const CompanyDescription = styled.p`
    color: var(--Neutral5, #012);
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px; /* 161.8% */
    letter-spacing: 0.3px;

    margin: 0px;
`

const InfoDetail = styled.div`
    display: flex;
    gap: 10px;
    min-width: 285px;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 600px) {
        min-width: 0;
        white-space: wrap;
    }
`

const InfoContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap; 
    align-items: flex-start; 

    color: var(--Neutral3, #767873);

    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.652px; /* 161.8% */
    letter-spacing: 0.28px;

    @media screen and (max-width: 600px) {
        flex-direction:column;
    }
`

const CompanyInfo = ({ location, onboardingDate, address, website, phoneNumber, email }) => {
    const formattedDate = getFormattedDate(onboardingDate)

    return (
        <InfoContainer>
            <InfoDetail>
                <Icon src="/assets/user-location-line.png" alt={`Location icon: ${location}`} />
                Location: {location}
            </InfoDetail>
            <InfoDetail>
                <Icon src="/assets/calendar-date.png" alt={`Calendar icon: ${formattedDate}`} />
                Date Onboarded: {formattedDate}
            </InfoDetail>
            <InfoDetail>
                <Icon src="/assets/search-eye-line.png" alt={`Search icon: ${address}`} />
                {address}
            </InfoDetail>
            <InfoDetail>
                <Icon src="/assets/earth-line.png" alt={`Globe icon: ${website}`} />
                {website}
            </InfoDetail>
            <InfoDetail>
                <Icon src="/assets/phone-line.png" alt={`Phone icon: ${phoneNumber}`} />
                {phoneNumber}
            </InfoDetail>
            <InfoDetail>
                <Icon src="/assets/mail-line.png" alt={`Mail icon: ${email}`} />
                {email}
            </InfoDetail>
        </InfoContainer>
    );
};

const Heading = styled.div`
    color: var(--Neutral4, #454843);

    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32.36px; /* 161.8% */
    letter-spacing: 0.4px;

    padding-bottom: 15px;
    width: 100%;
    border-bottom: 1px solid #E2E3DD;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;

        font-size: 16px;
        line-height: normal;
        letter-spacing: 0.32px;
    }
`

const ActiveContainer = styled.div`    
    display: flex;
    gap: 20px;
    align-items: center;

    @media screen and (max-width: 600px) {
        gap: 8px;
    }
`

const Activity = styled.span`
    border-radius: 10000px;
    background: ${(props) => (props.$active ? "#DFFAD5" : "#DF0000")}; 
    color: ${(props) => (props.$active ? "#2AA836" : "#2A0000")}; 
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px; /* 161.8% */
    letter-spacing: 0.3px;
    display: inline-flex;
    padding: 5px 10px;
    align-items: flex-start;
    gap: 5px;
`

const BlueButton = styled(Button)`
    padding: 10px 15px;

    @media screen and (max-width: 600px) {
        gap: 10px;
        width: fit-content;
        align-self: flex-start;
    }
`

const SendReminder = ({ children, handleClick }) => (
    <BlueButton onClick={handleClick}>
        <Icon src="/assets/notification-line.svg" alt="Add Icon" />
        {children}
    </BlueButton>
)

const Cards = styled.div`
    display: flex;
    width: 100%;
    gap: ${(props) => (props.gap ? props.gap : "45px")};

    @media screen and (max-width: 768px) {
        gap: 10px;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 24px;
    }
`

const Card = styled.div`
   /* Flex container styles */
   display: flex;
   width: 100%;
   flex-direction: column;
   gap: 5px;

   /* Text styles */
   color: var(--Neutral5, #012);
   font-family: Poppins;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 22.652px; /* 161.8% */
   letter-spacing: 0.28px;

   /* Styles for span element */
   span {
       font-size: 25px;
       font-weight: 500;
       line-height: 40.45px; /* 161.8% */
       letter-spacing: 0.5px;
   }

   /* Styles for div element */
   div {
       color: var(--Info4, #3F9CE9);
       font-size: 15px;
       line-height: 24.27px; /* 161.8% */
       letter-spacing: 0.3px;
       display: flex;
       gap: 10px; 
       align-items: center;
   }

   /* Responsive styles for medium-sized screens */
   @media screen and (max-width: 768px) {
       width: fit-content;
   }

   /* Responsive styles for small screens */
   @media screen and (max-width: 600px) {
       width: 100%;
       align-items: center;
       gap: 5px;
   }
`;

const ContractDetailsCard = ({ contractLength, onboardingDate }) => {
    const startDate = new Date(onboardingDate);
    const startMonth = (startDate.getMonth() + 1).toString().padStart(2, '0');
    const startDay = startDate.getDate().toString().padStart(2, '0');
    const startYear = startDate.getFullYear().toString();

    const formattedStartDate = `${startMonth}/${startDay}/${startYear}`;

    const endDate = new Date(onboardingDate);
    endDate.setMonth(endDate.getMonth() + contractLength);
    const endMonth = (endDate.getMonth() + 1).toString().padStart(2, '0');
    const endDay = endDate.getDate().toString().padStart(2, '0');
    const endYear = endDate.getFullYear().toString();

    const formattedEndDate = `${endMonth}/${endDay}/${endYear}`;

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
        <Cards>
            <Card>
                Contract length
                <span>{contractLength} months</span>
                <div>
                    <Icon src="/assets/time-line.svg" />
                    {timeLeft} left
                </div>
            </Card>
            <Card>
                Contract Start Date
                <span>{formattedStartDate}</span>
            </Card>
            <Card>
                Contract End Date
                <span>{formattedEndDate}</span>
            </Card>
        </Cards>
    )
}

const LicenseDetailsCard = ({ licenseCount, usedLicenses }) => {
    return (
        <Cards gap="50px">
            <Card>
                Total No of Licenses
                <span>{licenseCount} months</span>
            </Card>
            <Card>
                No of License in Use
                <span>{usedLicenses}</span>
            </Card>
        </Cards>
    )
}

export {
    Container,
    TopContainer,
    BackButton,
    RemoveCompany,
    DisplayPicture,
    CompanyDetails,
    CompanyDescription,
    CompanyInfo,
    Heading,
    ActiveContainer,
    Activity,
    SendReminder,
    ContractDetailsCard,
    LicenseDetailsCard,
}
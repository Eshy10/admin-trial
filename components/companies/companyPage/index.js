import React, { useEffect, useState } from "react";
import {
    Wrapper,
    ListContainer,
    Header
} from "../companies.styles"
import {
    BackButton,
    Container,
    DisplayPicture,
    RemoveCompany,
    TopContainer,
    CompanyDetails,
    CompanyDescription,
    CompanyInfo,
    Heading,
    ActiveContainer,
    Activity,
    SendReminder,
    ContractDetailsCard,
    LicenseDetailsCard
} from "./company.styles";
import SearchComponent from "@/components/search/search";
import Table from "../tables/usersTable"
import { usersData } from "@/utils/companyData";
import ReminderModal from "../modals/reminderModal";
import RemoveCompanyModal from "../modals/removeCompanyModal";

export default function Company(props) {
    const {
        id,
        active,
        name,
        logo,
        projectNo,
        onboardingDate,
        contractLength,
        licenseCount,
        usedLicenses,
        description,
        location,
        address,
        website,
        phoneNumber,
        email
    } = props

    const [filter, setFilter] = useState('')
    const [data, setData] = useState(usersData)

    const tableHeadings = [
        "S/N",
        "NAME",
        "ROLE",
        "DATE JOINED",
        "ADDED BY"
    ]

    useEffect(() => {
        if (filter.length === 0) {
            setData(usersData)
        }
        else {
            setData(usersData.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())))
        }
    }, [filter])

    const [showContractDetails, setShowContractDetails] = useState(false)
    const [showLicenseDetails, setShowLicenseDetails] = useState(false)
    const [showReminderModal, setShowReminderModal] = useState(false)
    const [showRemoveCompanyModal, setShowRemoveCompanyModal] = useState(false)

    const [isMobile, setIsMobile] = useState(true);
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 600);
        }

        if (typeof window !== 'undefined') {
            handleResize();
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <>
            <Wrapper>
                <TopContainer>
                    <BackButton />
                    <RemoveCompany handleClick={() => setShowRemoveCompanyModal(true)} />
                </TopContainer>

                {/* Company Details */}
                <Container>
                    <DisplayPicture src={logo} name={name} isMobile={isMobile} />
                    <CompanyDetails projectNo={projectNo} licenseCount={licenseCount} usedLicenses={usedLicenses} />
                    <CompanyDescription>{description}</CompanyDescription>
                    <CompanyInfo
                        location={location}
                        address={address}
                        website={website}
                        phoneNumber={phoneNumber}
                        email={email}
                        onboardingDate={onboardingDate}
                    />
                </Container>

                {/* Contract Details */}
                <Container>
                    <Heading onClick={() => setShowContractDetails((show) => !show)}>
                        <ActiveContainer>
                            Contract Details
                            <Activity $active={active}>{active ? "Active" : "Inactive"}</Activity>
                        </ActiveContainer>
                        <SendReminder handleClick={(e) => { e.stopPropagation(); setShowReminderModal(true); }}>
                            SEND REMINDER
                        </SendReminder>
                    </Heading>
                    {
                        showContractDetails &&
                        <ContractDetailsCard onboardingDate={onboardingDate} contractLength={contractLength} />
                    }
                </Container>

                {/* License Details */}
                <Container>
                    <Heading onClick={() => setShowLicenseDetails((show) => !show)}>
                        License Details
                    </Heading>
                    {
                        showLicenseDetails &&
                        <LicenseDetailsCard licenseCount={licenseCount} usedLicenses={usedLicenses} />
                    }
                </Container>

                {/* Details about Users */}
                <ListContainer>
                    <Header>
                        List of current licensed users
                        <SearchComponent width='290px' setField={setFilter} searchField={filter} />
                    </Header>
                    <Table headings={tableHeadings} users={data} />
                </ListContainer>
            </Wrapper>
            {
                showReminderModal &&
                <ReminderModal closeModal={() => setShowReminderModal(false)} id={id} name={name} />
            }
            {
                showRemoveCompanyModal &&
                <RemoveCompanyModal closeModal={() => setShowRemoveCompanyModal(false)} id={id} name={name} />
            }
        </>
    )
}     
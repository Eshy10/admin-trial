import React, { useEffect, useState } from "react";
import {
    AddButton,
    Cards,
    InfoCard,
    Wrapper,
    Header,
    ListContainer,
} from "./companies.styles"
import SearchComponent from "@/components/search/search";
import Table from "./tables/companiesTable";
import { companyData } from "@/utils/companyData"


export default function Companies() {
    const [filter, setFilter] = useState('')
    const [companiesData, setData] = useState(companyData)

    const tableHeadings = [
        "S/N",
        "COMPANY NAME",
        "DATE ONBOARDED",
        "CONTRACT LENGTH",
        "TOTAL NO. OF LICENSES",
        "TIME LEFT",
        "ACTION"
    ]

    useEffect(() => {
        if (filter.length === 0) {
            setData(companyData)
        }
        else {
            setData(companyData.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())))
        }
    }, [filter])

    return (
        <Wrapper>
            {/* <AddButton>ONBOARD NEW COMPANY</AddButton> */}
            <Cards>
                <InfoCard color='blue' text='No. of Onboarded Companies' figure={34} />
                <InfoCard color='yellow' text='No. of Contracts Pending Renewal' figure={14} />
            </Cards>
            <ListContainer>
                <Header>
                    Company List
                    <SearchComponent width='290px' setField={setFilter} searchField={filter} />
                </Header>
                <Table headings={tableHeadings} companies={companiesData} />
            </ListContainer>
        </Wrapper>
    )
}     
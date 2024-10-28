import React, { useEffect, useState } from "react";
import {
    TableSkeleton,
    CompaniesTableItem,
    IndexContainer,
    EmptyResult
} from "./table.styles"
import { CompanyCard } from "./card";
import Pagination from "@/components/pagination/pagination";

export default function Table({ headings, companies, itemsOnPage = 10 }) {
    const totalPages = Math.ceil(companies.length / itemsOnPage)
    const [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const handlePageChange = (newPage) => {
        const start = itemsOnPage * (newPage - 1)
        const end = itemsOnPage * newPage
        setPage(newPage)
        setList(companies.slice(start, end))
    }

    useEffect(() => {
        handlePageChange(1)
    }, [companies])

    return (
        <>
            {
                list.map((item, index) => (
                    <CompanyCard headings={headings} key={index} {...item} />
                ))
            }
            <TableSkeleton headings={headings}>
                {
                    list.map((item, index) => (
                        <CompaniesTableItem key={index} {...item} />
                    ))
                }
            </TableSkeleton>
            {
                list.length === 0 &&
                <EmptyResult>Sorry, No Companies Found!</EmptyResult>
            }
            {
                totalPages > 1 &&
                <IndexContainer>
                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </IndexContainer>
            }
        </>
    )
}     
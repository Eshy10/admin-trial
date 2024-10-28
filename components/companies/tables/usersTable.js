import React, { useEffect, useState } from "react";
import {
    TableSkeleton,
    UsersTableItem,
    IndexContainer,
    EmptyResult,
} from "./table.styles"
import { UsersCard } from "./card";
import Pagination from "@/components/pagination/pagination";

export default function Table({ headings, users, itemsOnPage = 10 }) {
    const totalPages = Math.ceil(users.length / itemsOnPage)
    const [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const handlePageChange = (newPage) => {
        const start = itemsOnPage * (newPage - 1)
        const end = itemsOnPage * newPage
        setPage(newPage)
        setList(users.slice(start, end))
    }

    useEffect(() => {
        handlePageChange(1)
    }, [users])

    return (
        <>
            {
                list.map((item, index) => (
                    <UsersCard headings={headings} key={index} {...item} handleRemoveMember={() => console.log('remove member')} />
                ))
            }
            <TableSkeleton headings={headings}>
                {
                    list.map((item, index) => (
                        <UsersTableItem key={index} {...item} />
                    ))
                }
            </TableSkeleton>
            {
                list.length === 0 &&
                <EmptyResult>Sorry, No Users Found!</EmptyResult>
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
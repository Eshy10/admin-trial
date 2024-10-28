import React, { useEffect, useState } from "react";

import {
    DashboardWrapper,
    TransactionsWrapper,
    TransactionsTitle,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    RowWrrapper,
    MusicSubmissionWrapper,
    NumOfFiles,
    ViewFiles,
    ActionButtonsWrapper,
    Button,
} from "./table.styles";

import TheLink from "@/components/TheLink";
import { paginationData } from "../../../utils/paginationData";
import usePagination from "../../pagination/usePagination";
import Pagination from "@/components/pagination/pagination";

export default function SubmissionsTableMobile () {

    const itemsPerPage = 5;

    const { currentPage, totalPages, currentPageData, onPageChange } = usePagination(paginationData,itemsPerPage);
  return (
         <DashboardWrapper>
            <TransactionsWrapper>
                <TransactionsTitle>Submissions</TransactionsTitle>
                <TableContainer>
                <TableHeader>
                {currentPageData.map(item => (
                    <RowWrrapper key={item.id}>
                        <TableRow>
                            <TableCell $headerweight  $headercolor>Submissions</TableCell>
                            <TableCell>
                                <TableCell>
                                    <TableCell>{item.artistName}</TableCell>
                                </TableCell>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell $headerweight  $headercolor>REQUEST TITLE</TableCell>
                            <TableCell>{item.requestTitle}</TableCell>
                        </TableRow>

                        <TableRow>
                        <TableCell $headerweight  $headercolor>MUSIC SUBMISSSION</TableCell>
                            <TableCell>
                                 <MusicSubmissionWrapper>
                                      <NumOfFiles>{item.files}</NumOfFiles>
                                      <ViewFiles>{item.viewFiles}</ViewFiles>
                                 </MusicSubmissionWrapper>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell $headerweight  $headercolor>DATE SUBMITTED</TableCell>
                            <TableCell>{item.date}</TableCell>
                        </TableRow>

                        <TableRow $marbottom $borderbottom>
                            <TableCell $marTop $headerweight  $headercolor>ACTION</TableCell>
                            <TableCell $marTop>
                              <TheLink to="/submissionDetails">
                                  <ActionButtonsWrapper>
                                      <Button>VIEW SUBMISSION DETAILS</Button>
                                  </ActionButtonsWrapper>
                              </TheLink>
                              </TableCell>
                        </TableRow>  
                    </RowWrrapper>
                 ))}

                </TableHeader>

            </TableContainer>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
                />
            </TransactionsWrapper>
        </DashboardWrapper>
  )
}

import React, { useEffect, useState } from "react";

import {
    DashboardWrapper,
    DateContainer,
    TransactionsWrapper,
    TransactionsTitle,
    ButtonsContainer,
    TransactionsButtons,
    ReceivedButton,
    ButtonWrapper,
    ArtisttName,
    UserIconWrapper,
    UserIcon,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    DateCell,
    MusicSubmissionWrapper,
    NumOfFiles,
    ViewFiles,
    ActionButtonsWrapper,
    Button,
    StatusContainer,
    SearchContainer,
    MobileContainer
} from "./submissions.styles";
import SearchComponent from "@/components/search/search";
import StatusComponent from "@/components/status";
import TheLink from "@/components/TheLink";
import CustomDatePicker from "@/components/datePicker/datePicker";
import { paginationData } from "../../utils/paginationData";
import Pagination from "@/components/pagination/pagination";
import usePagination from "../pagination/usePagination";
import SubmissionsTableMobile from "./mobileView"

export default function Submissions() {

    const itemsPerPage = 5;

    const { currentPage, totalPages, currentPageData, onPageChange } = usePagination(paginationData,itemsPerPage);
  return (
         <DashboardWrapper>
            <ButtonsContainer>
                <SearchContainer>
                    <SearchComponent />
                </SearchContainer>
                <TransactionsButtons>
                <DateContainer>
                    <CustomDatePicker placeholderText="Date" />
                </DateContainer>
                    <StatusContainer>
                        <StatusComponent />      
                    </StatusContainer>
                    <ButtonWrapper>
                        <ReceivedButton>RESET</ReceivedButton>
                    </ButtonWrapper>
                </TransactionsButtons>
            </ButtonsContainer>

            <TransactionsWrapper display={["block", "block", "flex", "flex"]}>
                <TableContainer>
                    <TableHeader>
                        <TableCell headerheight $headercolor>S/N</TableCell>
                        <TableCell headerheight $headercolor>ARTIST NAME</TableCell>
                        <TableCell headerheight $headercolor>REQUEST TITLE</TableCell>
                        <TableCell headerheight $headercolor>MUSIC SUBMISSSION</TableCell>
                        <DateCell headerheight $headercolor>DATE SUBMITTED</DateCell>
                        <TableCell headerheight $headercolor>ACTION</TableCell>
                    </TableHeader>
                        {currentPageData.map(item => (
                              <TableRow  key={item.id}>
                              <TableCell>{item.id}</TableCell>
                              <TableCell>
                              <TableCell>
                                  <UserIconWrapper>
                                      <UserIcon />    
                                  </UserIconWrapper>
                                  <ArtisttName>{item.artistName}</ArtisttName>
                              </TableCell>
                              </TableCell>
                              <TableCell>{item.requestTitle}</TableCell>
                              <TableCell>
                                 <MusicSubmissionWrapper>
                                      <NumOfFiles>{item.files}</NumOfFiles>
                                      <ViewFiles>{item.viewFiles}</ViewFiles>
                                 </MusicSubmissionWrapper>
                              </TableCell>
                              <DateCell>{item.date}</DateCell>
                              <TableCell>
                              <TheLink to="/submissionDetails">
                                  <ActionButtonsWrapper>
                                      <Button>VIEW SUBMISSION DETAILS</Button>
                                  </ActionButtonsWrapper>
                              </TheLink>
                              </TableCell>
                          </TableRow>
                        ))}
                </TableContainer>
                <MobileContainer>
                    <SubmissionsTableMobile />
              </MobileContainer>
            </TransactionsWrapper>
        </DashboardWrapper>
  )
}

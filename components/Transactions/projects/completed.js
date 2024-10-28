import React, { useEffect, useState } from "react";

import {
    TransactionsWrapper,
    TableContainer,
    TBodyContainer,
    TableHeader,
    TableRow,
    TableCell,
    FileIcon,
    CollaboratorCell
} from "@/components/Transactions/projects/active.styles";
import { paginationData } from "../../../utils/paginationData";
import Pagination from "@/components/pagination/pagination";
import usePagination from "@/components/pagination/usePagination";

const Completed = () => {

  const itemsPerPage = 5;

  const { currentPage, totalPages, currentPageData, onPageChange } = usePagination(paginationData,itemsPerPage);

    return (
          <TransactionsWrapper>
          <TableContainer>
                <TBodyContainer>
                <TableRow>
                    <TableHeader>S/N</TableHeader>
                    <TableHeader>PROJECT NAME</TableHeader>
                    <TableHeader>PROJECT OWNER</TableHeader>
                    <TableHeader>START DATE</TableHeader>
                    <TableHeader>END DATE</TableHeader>
                    <TableHeader>COLLABORATORS</TableHeader>
                    <TableHeader>ROLE</TableHeader>
                </TableRow>

                    {currentPageData.map(item => (
                        <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.artistName}</TableCell>
                        <TableCell>{item.fullName}</TableCell>
                        <TableCell>{item.startDate}</TableCell>
                        <TableCell>{item.endDate}</TableCell>
                        <TableCell>{item.collaborator}</TableCell>
                        <TableCell>
                        <CollaboratorCell $successradius $collabbg $successsize $successpadding $collabwidth>Collaborator</CollaboratorCell>
                        </TableCell>
                        </TableRow>
                    ))}
                </TBodyContainer>
            </TableContainer>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
            </TransactionsWrapper> 
    );
  };
  
  export default Completed;
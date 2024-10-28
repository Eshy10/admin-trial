import React, { useEffect, useState } from "react";

import {
    TransactionsWrapper,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    FileIcon,
    CollaboratorCell,
    RowWrrapper
} from "@/components/Transactions/projects/mobileView/table.styles";
import { paginationData } from "../../../../utils/paginationData";
import Pagination from "@/components/pagination/pagination";
import usePagination from "@/components/pagination/usePagination";

const ActiveMobile = () => {

  const itemsPerPage = 5;

  const { currentPage, totalPages, currentPageData, onPageChange } = usePagination(paginationData,itemsPerPage);

    return (
      <TransactionsWrapper>
            <TableContainer>
                <TableHeader>
                {currentPageData.map(item => (
                    <RowWrrapper key={item.id}>
                        <TableRow>
                            <TableCell $headercolor $headerweight>PROJECT NAME</TableCell>
                            <TableCell>{item.artistName}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell $headercolor $headerweight>PROJECT OWNER</TableCell>
                            <TableCell>{item.fullName}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell $headercolor $headerweight>START DATE</TableCell>
                            <TableCell>{item.startDate}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell $headercolor $headerweight>END DATE</TableCell>
                            <TableCell>{item.endDate}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell $headercolor $headerweight>COLLABORATORS</TableCell>
                            <TableCell>{item.collaborator}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell $headercolor $headerweight>ROLE</TableCell>
                        <TableCell>
                           <CollaboratorCell $successradius $collabbg $successsize $successpadding $collabwidth>Collaborator</CollaboratorCell>
                        </TableCell>
                        </TableRow>
                        <TableRow $borderbottom $marbottom>
                           
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
    );
  };
  
  export default ActiveMobile;
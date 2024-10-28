import React, { useEffect, useState } from "react";
import {
    TransactionsWrapper,
    FileIcon,
    DeleteIcon,
    TableContainer,
    TableHeader,
    RowWrrapper,
    TableRow,
    TableCell,
    IconCell,
    SucessCell
} from "./transaction.styles";
import TheLink from "@/components/TheLink";
import Pagination from "@/components/pagination/pagination";

export default function ReceivedMobile({ currentPageData, onRowClickReceived, currentPage, totalPages, onPageChange, OpenDeleteModal }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [closeModal, setCloseModal] = useState(true);

    const handleDeleteIconClick = (event) => {
        event.stopPropagation();
        
        OpenDeleteModal();
    
        setShowDeleteModal(true);
      };
    
  return (
        <TransactionsWrapper>
            <TableContainer>
                <TableHeader>
                    {currentPageData?.map(item => (
                   <RowWrrapper  key={item.id} onClick={() => onRowClickReceived(item)}>
                    <TableRow>
                        <TableCell $headercolor $headerweight>PROJECT NAME</TableCell>
                        <TableCell>{item.artistName}</TableCell>
                    </TableRow>

                    <TableRow>
                    <TableCell $headercolor $headerweight>PROJECT OWNER</TableCell>
                    <TableCell>{item.fullName}</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell $headercolor $headerweight>SERVICE HIRE</TableCell>
                    <TableCell>{item.skill}</TableCell>
                    </TableRow>

                    <TableRow>
                    <TableCell $headercolor $headerweight>END DATE</TableCell>
                    <TableCell>{item.date}</TableCell>
                    </TableRow>

                    <TableRow>
                    <TableCell $headercolor $headerweight>AMOUNT</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    </TableRow>

                    <TableRow>
                    <TableCell $headercolor $headerweight>STATUS</TableCell>
                    <TableCell>
                    <SucessCell $successradius $successbg $successsize $successpadding $successwidth>Success</SucessCell>
                        </TableCell>
                    </TableRow>
                    <TableRow $borderbottom $marbottom>
                        <TableCell $headercolor $headerweight>ACTION</TableCell>
                        <TableCell>
                             <DeleteIcon onClick={handleDeleteIconClick} />
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
  )
}

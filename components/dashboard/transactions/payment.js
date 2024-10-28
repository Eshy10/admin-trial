import React, { useEffect, useState } from "react";
import {
    TransactionsWrapper,
    FileIcon,
    DeleteIcon,
    TableContainer,
    TableHeader,
    TBodyContainer,
    TableRow,
    TableCell,
    SucessCell
} from "./transaction.styles";
import TheLink from "@/components/TheLink";
import Pagination from "@/components/pagination/pagination";

export default function Payments({ currentPageData, onRowClickPayment, currentPage, totalPages, onPageChange, OpenDeleteModal }) {
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
            <TBodyContainer>
                <TableRow>
                    <TableHeader>S/N</TableHeader>
                    <TableHeader>PROJECT NAME</TableHeader>
                    <TableHeader>PROJECT OWNER</TableHeader>
                    <TableHeader >SERVICE HIRE</TableHeader>
                    <TableHeader >END DATE</TableHeader>
                    <TableHeader >AMOUNT</TableHeader>
                    <TableHeader >STATUS</TableHeader>
                    <TableHeader  >ACTION</TableHeader>
                </TableRow>
                    {currentPageData.map(item => (
                        <TableRow key={item.id} onClick={() => onRowClickReceived(item)}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.artistName}</TableCell>
                            <TableCell>{item.fullName}</TableCell>
                            <TableCell>{item.skill}</TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.amount}</TableCell>
                            <TableCell>
                            <SucessCell $successradius $successbg $successsize $successpadding $successwidth>Success</SucessCell>
                            </TableCell>
                            <TableCell>
                                <DeleteIcon onClick={handleDeleteIconClick} />
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
  )
}

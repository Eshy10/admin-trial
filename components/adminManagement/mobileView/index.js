import React, { useEffect, useState } from "react";

import {
    DashboardWrapper,
    TransactionsWrapper,
    TransactionsTitle,
    FileIcon,
    DeleteIcon,
    UserIconWrapper,
    UserIcon,
    PencilEditIcon,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    SucessCell,
    DateCell,
    IconCell,
    MobileContainer,
    RowWrrapper
} from "./table.styles";
import TheLink from "@/components/TheLink";
import { paginationData } from "../../../utils/paginationData";
import DeleteTransactionModal from "@/components/deleteTransactionModal/deleteTransactionModal";
import usePagination from "@/components/pagination/usePagination";


export default function AdminManagementMobile() {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [closeModal, setCloseModal] = useState(true);

    const itemsPerPage = 5;

    const { currentPageData } = usePagination(paginationData,itemsPerPage);
    
    const handleCloseModal = () => {
        setCloseModal(false);
    }; 
    const handleOpenDeleteModal = () => {
        setShowDeleteModal(true);
    };

  return (
    <DashboardWrapper>
        <TransactionsWrapper>
            <TableContainer>
                <TableHeader>
                {currentPageData.map(item => (
                    <RowWrrapper key={item.id}>
                        <TableRow>
                            <TableCell $headerweight $headercolor>USER</TableCell>
                            <TableCell>{item.username}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell $headerweight $headercolor>EMAIL ADDRESS</TableCell>
                            <TableCell>{item.email}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell $headerweight $headercolor>USER ROLE</TableCell>
                            <TableCell>{item.role}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell $headerweight $headercolor>RECENT ACTIVITY</TableCell>
                            <TableCell>{item.recentActivity}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell $headerweight $headercolor>STATUS</TableCell>
                            <TableCell>
                                <SucessCell $bcolor={item.bcolor} $color={item.color} $successradius $successbg $successsize $successpadding $successwidth>{item.status}</SucessCell>
                            </TableCell>
                        </TableRow>

                        <TableRow $marbottom $borderbottom>
                            <TableCell $headerweight $headercolor>ACTION</TableCell>
                            <TableCell>
                            <TableCell>
                                <TheLink to="/editRequest">
                                    <PencilEditIcon />
                                </TheLink>
                                <DeleteIcon onClick={handleOpenDeleteModal}/>
                            </TableCell>
                        </TableCell>
                        </TableRow>  
                    </RowWrrapper>
                 ))}

                </TableHeader>

            </TableContainer>
            {showDeleteModal && (
                <DeleteTransactionModal
                    messageTitle="Are you sure?"
                    messageDescription="Do you really want to delete this transaction? This action cannot be undone.?"
                    onClose={handleCloseModal}
                    closeModal={() => setShowDeleteModal(!showDeleteModal)}
                />
                )}
        </TransactionsWrapper>
    </DashboardWrapper>
  )
}

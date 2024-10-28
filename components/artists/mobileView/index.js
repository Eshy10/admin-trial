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
    DateCell,
    IconCell,
    MobileContainer,
    RowWrrapper
} from "./table.styles";
import TheLink from "@/components/TheLink";
import { paginationData } from "../../../utils/paginationData";
import DeleteTransactionModal from "@/components/deleteTransactionModal/deleteTransactionModal";
import usePagination from "@/components/pagination/usePagination";


export default function ArtistTableMobile() {
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
                            <TableCell $headerweight  $headercolor>ARTIST</TableCell>
                            <TableCell>
                                <IconCell>
                                    {/* <UserIconWrapper>
                                        <UserIcon />    
                                    </UserIconWrapper> */}
                                    <TableCell>{item.artistName}</TableCell>
                                </IconCell>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell $headerweight  $headercolor>SERVICE HIRE</TableCell>
                            <TableCell>{item.skill}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell $headerweight  $headercolor>EMAIL</TableCell>
                            <TableCell>{item.email}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell $headerweight  $headercolor>DATE JOINED</TableCell>
                            <TableCell>{item.date}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell $headerweight  $headercolor>LOCATION</TableCell>
                            <TableCell>{item.location}</TableCell>
                        </TableRow>

                        <TableRow $marbottom $borderbottom>
                            <TableCell $headerweight  $headercolor>ACTION</TableCell>
                            <TableCell>
                            <TableCell>
                                <TheLink to="/file">
                                    <FileIcon />
                                </TheLink>
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

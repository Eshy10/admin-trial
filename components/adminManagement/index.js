import React, { useEffect, useState } from "react";

import {
    DashboardWrapper,
    TopContainer,
    MetricsWrapper,
    MetricsDetailBoxes,
    TopItems,
    BottomItems,
    TopText,
    BottomText,
    DateWrapper,
    DateContainer,
    DateText,
    PeachIcon,
    YellowIcon,
    AddIcon,
    BlueIcon,
    PurpleIcon,
    GreenIcon,
    InfoIcon,
    TransactionsWrapper,
    TransactionsTitle,
    ButtonsContainer,
    TransactionsButtons,
    ReceivedButton,
    ButtonWrapper,
    FileIcon,
    DeleteIcon,
    UserIconWrapper,
    UserIcon,
    PencilEditIcon,
    TableContainer,
    TableHeader,
    TBodyContainer,
    TableRow,
    TableCell,
    SucessCell,
    DateCell,
    RoleCell,
    IconCell,
    MobileContainer,
    Container 
} from "./adminManagement.styles";
import TheLink from "@/components/TheLink";
import SearchComponent from "@/components/search/search";
import SelectFieldComponent from "@/components/select/selectField";
import UserRoleDropdownComponent from "@/components/userRole/userRole";
import { paginationData } from "../../utils/paginationData";
import DeleteTransactionModal from "@/components/deleteTransactionModal/deleteTransactionModal";
import AdminManagementMobile from "@/components/adminManagement/mobileView"

import Pagination from "@/components/pagination/pagination";
import usePagination from "../pagination/usePagination";

export default function AdminManagement() {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [closeModal, setCloseModal] = useState(true);


    const handleCloseModal = () => {
        setCloseModal(false);
    }; 
    const handleOpenDeleteModal = () => {
        setShowDeleteModal(true);
    };

    const itemsPerPage = 5;

    const { currentPage, totalPages, currentPageData, onPageChange } = usePagination(paginationData,itemsPerPage);

    
      const usersStats = [
        {
          title: "No. of Collaborations",
          val: 3247,
          icontop: "/assets/group-icon-user.png",
          iconbottom: "/assets/information-line.png",
          bgcolor: "#DADDFB",
        },
        {
          title: "No. of Completed Collaborations",
          val: 1453,
          icontop: "/assets/checkbox-blue.png",
          iconbottom: "/assets/information-line.png",
          bgcolor: "#D6FFFB",
        },
        {
          title: "Collaboration Retention Rate",
          val: '45%',
          icontop: "/assets/line-chart-filll.png",
          iconbottom: "/assets/information-line.png",
          bgcolor: "#DFFAD5",
        },
        ]  
        
  return (
    <DashboardWrapper>
        <TopContainer>
            <TheLink to="/newAdmin">
                <DateWrapper>
                    <DateContainer>
                        <AddIcon />
                        <DateText $newsize>ADD NEW ADMIN USER</DateText>
                    </DateContainer>
                </DateWrapper>
            </TheLink>
            <MetricsWrapper> 
            {usersStats.map(({ title, val, icontop, iconbottom, bgcolor, }, idx) => (
                 <MetricsDetailBoxes key={idx} $bgcolor={bgcolor}>
                 <TopItems>
                     <TopText>{title}</TopText>
                     <BlueIcon  src={icontop}/>
                 </TopItems>
                 <BottomItems>
                 <BottomText>{val}</BottomText> 
                 {/* <InfoIcon src={iconBottom}/> */}
                 </BottomItems>
             </MetricsDetailBoxes>
              ))}      
            </MetricsWrapper>
        </TopContainer>
        <ButtonsContainer>
            <SearchComponent />
            <TransactionsButtons>
                <Container >
                     <UserRoleDropdownComponent />
                </Container>
            </TransactionsButtons>
        </ButtonsContainer>

        <TransactionsWrapper>
            <TransactionsTitle>Admin User List</TransactionsTitle>
            <TableContainer>
              <TBodyContainer>
                <TableRow>
                    <TableHeader>S/N</TableHeader>
                    <TableHeader>USER</TableHeader>
                    <TableHeader>EMAIL ADDRESS</TableHeader>
                    <TableHeader>USER ROLE</TableHeader>
                    <TableHeader>RECENT ACTIVITY</TableHeader>
                    <TableHeader>STATUS</TableHeader>
                    <TableHeader>ACTION</TableHeader>
                </TableRow>

                {currentPageData.map(item => (
                        <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>
                            <IconCell>
                                <UserIconWrapper>
                                    <UserIcon />    
                                </UserIconWrapper>
                                 <TableCell>{item.username}</TableCell>
                            </IconCell>
                    </TableCell>
                        <TableCell>{item.email}</TableCell >
                        <TableCell>{item.role}</TableCell>
                        <TableCell>{item.recentActivity}</TableCell>
                        <TableCell>
                            <SucessCell $bcolor={item.bcolor} $color={item.color} $successradius $successbg $successsize $successpadding $successwidth>{item.status}</SucessCell>
                        </TableCell>
                       <TableCell>
                       <TableCell>
                            <TableCell>
                                <TheLink to="/editAdmin">
                                    <PencilEditIcon />
                                </TheLink>
                                <DeleteIcon onClick={handleOpenDeleteModal}/>
                            </TableCell>
                        </TableCell>
                        </TableCell>
                        </TableRow>
                 ))}
              </TBodyContainer>
            </TableContainer>
              <MobileContainer>
                <AdminManagementMobile />
              </MobileContainer>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
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

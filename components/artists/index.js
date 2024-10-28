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
    Container ,
    ReceivedButton,
    ButtonWrapper,
    FileIcon,
    DeleteIcon,
    UserIconWrapper,
    UserIcon,
    PencilEditIcon,
    TableContainer,
    TBodyContainer,
    TableHeader,
    TableRow,
    TableCell,
    DateCell,
    IconCell,
    MobileContainer,
    SearchContainer,
} from "./artists.styles";
import TheLink from "@/components/TheLink";
import SearchComponent from "@/components/search/search";
import SelectFieldComponent from "@/components/select/selectField";
import StatusComponent from "@/components/status";
import { paginationData } from "../../utils/paginationData";
import DeleteTransactionModal from "@/components/deleteTransactionModal/deleteTransactionModal";
import ArtistTableMobile from "@/components/artists/mobileView"

import Pagination from "@/components/pagination/pagination";
import usePagination from "../pagination/usePagination";

export default function Artist() {
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
          title: "Total Artists",
          val: 3247,
          icontop: "/assets/team-line light.png",
          iconbottom: "/assets/information-line.png",
          bgcolor: "#DADDFB",
        },
        {
          title: "No. of Active Artists",
          val: 3247,
          icontop: "/assets/user-follow.png",
          iconbottom: "/assets/information-line.png",
          bgcolor: "#DFFAD5",
        },
        {
          title: "No. of paid Artists",
          val: 3247,
          icontop: "/assets/user-star-line.png",
          iconbottom: "/assets/information-line.png",
          bgcolor: "#CBEEFD",
        },
        {
          title: "No. of Dormant Artists",
          val: 3247,
          icontop: "/assets/user-2-peach.png",
          iconbottom: "/assets/information-line.png",
          bgcolor: "#F9DBCF",
        },
        {
          title: "No. of New Artists",
          val: 3247,
          icontop: "/assets/user-line-yellow.png",
          iconbottom: "/assets/information-line.png",
          bgcolor: "#FFF5D0",
        },
        ]  
  return (
    <DashboardWrapper>
        <TopContainer>
            <TheLink to="/newArtist">
                <DateWrapper>
                    <DateContainer>
                        <AddIcon />
                        <DateText $newSize>ADD NEW ARTIST</DateText>
                    </DateContainer>
                </DateWrapper>
            </TheLink>
            <MetricsWrapper>  
            {usersStats.map(({ title, val, icontop, iconbottom, bgcolor, }, idx) => (
                 <MetricsDetailBoxes key={idx} bgcolor={bgcolor}>
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
            <SearchContainer>
               <SearchComponent />
            </SearchContainer>
            <TransactionsButtons>
                <Container>
                    <SelectFieldComponent />
                </Container>
                <Container>
                    <StatusComponent />
                </Container>
                <ButtonWrapper>
                    <ReceivedButton>RESET</ReceivedButton>
                </ButtonWrapper>
            </TransactionsButtons>
        </ButtonsContainer>

        <TransactionsWrapper>
            <TransactionsTitle>Artist List</TransactionsTitle>
            <TableContainer>
                <TBodyContainer>
                    <TableRow>
                        <TableHeader>S/N</TableHeader>
                        <TableHeader>ARTIST</TableHeader>
                        <TableHeader>SERVICE HIRE</TableHeader>
                        <TableHeader>EMAIL</TableHeader>
                        <TableHeader>DATE JOINED</TableHeader>
                        <TableHeader>LOCATION</TableHeader>
                        <TableHeader >ACTION</TableHeader>
                    </TableRow>

                    {currentPageData.map(item => (
                            <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>
                                <IconCell>
                                    <UserIconWrapper>
                                        <UserIcon />    
                                    </UserIconWrapper>
                                    <TableCell>{item.artistName}</TableCell>
                                </IconCell>
                        </TableCell>
                            <TableCell>{item.skill}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <DateCell>{item.date}</DateCell>
                            <TableCell>{item.location}</TableCell>
                        <TableCell>
                                <IconCell>
                                    <TheLink to="/editRequest">
                                        <PencilEditIcon />
                                    </TheLink>
                                    <DeleteIcon onClick={handleOpenDeleteModal}/>
                                </IconCell>
                            </TableCell>
                            </TableRow>
                    ))}
                </TBodyContainer>
            </TableContainer>
              <MobileContainer>
                <ArtistTableMobile />
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

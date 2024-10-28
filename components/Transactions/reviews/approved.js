import React, { useEffect, useState } from "react";

import {
    TransactionsWrapper,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    DescripyionCell,
    FileIcon,
    UserIconWrapper,
    UserTextnWrapper,
    UserIcon,
    FullStarIcon,
    HalfStarIcon,
    ActionButtonsWrapper,
    Button,
    ReviewText,
    RattingTextContainer
} from "./approved.styles";
import Pagination from "@/components/pagination/pagination";
import TheLink from "@/components/TheLink";

const Approved = ({ reviews, onApprove, onDelete, currentPageData, currentPage, totalPages, onPageChange }) => {
    const [showApprove, setShowApprove] = useState(false);

    const handleApprove = () => {
        
        console.log("handleApprove function called");
        onApprove();
    
        setShowApprove(true);
      };
    return (
          <TransactionsWrapper>
            <TableContainer>
                <TableHeader>
                    <TableCell $headercolor $headerweight>S/N</TableCell>
                    <TableCell $headercolor $headerweight>REVIEW</TableCell>
                    <TableCell $headercolor $headerweight>PROJECT NAME</TableCell>
                    <TableCell $headercolor $headerweight>RATING</TableCell>
                    <TableCell $headercolor $headerweight>ACTION</TableCell>
                </TableHeader>
                    {reviews.map(review => (
                        <TableRow key={review.id}>
                        <TableCell>{review.id}</TableCell>
                         <TableCell>
                            <UserIconWrapper>
                                <UserIcon />    
                            </UserIconWrapper>
                            <UserTextnWrapper>
                                <ReviewText>{review.title}</ReviewText>
                                <ReviewText $textwidth>{review.description}</ReviewText>
                            </UserTextnWrapper>
                        </TableCell>
                        <DescripyionCell>{review.fullName}</DescripyionCell>
                        <TableCell>
                            <TableCell>
                                <TableCell $ratingsize $ratingpadding>{review.rating}</TableCell> 
                                {Array(4).fill(
                                <RattingTextContainer>
                                    <FullStarIcon />
                                </RattingTextContainer>
                                )}
                                 {Array(1).fill(
                                <RattingTextContainer>
                                    <HalfStarIcon />
                                </RattingTextContainer>
                                )}
                            </TableCell>
                        </TableCell>
                        <TableCell>
                            <TableCell>
                                <ActionButtonsWrapper>
                                {review.approved ? (
                                    <Button $approveborder $approvecolor>Approved</Button>
                                    ) : (
                                    <Button $approveborder $approvecolor onClick={() => handleApprove(review.id)}>Approve</Button>
                                    )}
                                    <Button onClick={() => onDelete(review.id)}>DELETE</Button>
                                </ActionButtonsWrapper>
                                {/* <TheLink to="/file">
                                    <FileIcon />
                                </TheLink> */}
                            </TableCell>
                        </TableCell>
                        </TableRow>
                    ))}
            </TableContainer>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
            </TransactionsWrapper> 
    );
  };
  
  export default Approved;
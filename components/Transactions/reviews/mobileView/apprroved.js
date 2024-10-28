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
    RattingTextContainer,
    IconCell,
    RowWrrapper 
} from "./table.styles";
import Pagination from "@/components/pagination/pagination";
import TheLink from "@/components/TheLink";

const ApprovedMobile = ({ reviews, onApprove, onDelete, currentPageData, currentPage, totalPages, onPageChange }) => {
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
                    {reviews.map(review => (
                        <RowWrrapper key={review.id}>
                            <TableRow>
                                <TableCell $headercolor $headerweight>REVIEW</TableCell>
                                <TableCell>
                                    <UserTextnWrapper>
                                        <ReviewText>{review.title}</ReviewText>
                                        <ReviewText $textwidth>{review.description}</ReviewText>
                                    </UserTextnWrapper>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell $headercolor $headerweight>PROJECT NAME</TableCell>
                                <TableCell>{review.fullName}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell $headercolor $headerweight>RATING</TableCell>
                                  <TableCell>
                                    <IconCell>
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
                                    </IconCell>
                                  </TableCell>
                             </TableRow>
                             <TableRow $borderbottom $marbottom $padbottom>
                                <TableCell $headercolor $headerweight>ACTION</TableCell>
                                <TableCell>
                                    <TableCell>
                                        <ActionButtonsWrapper>
                                        {review.approved ? (
                                            <Button $approveborder $approvebolor>Approved</Button>
                                            ) : (
                                            <Button $approveborder $approvebolor onClick={() => handleApprove(review.id)}>Approve</Button>
                                            )}
                                            <Button onClick={() => onDelete(review.id)}>DELETE</Button>
                                        </ActionButtonsWrapper>
                                    </TableCell>
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
    );
  };
  
  export default ApprovedMobile;
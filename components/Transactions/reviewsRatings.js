import React, { useEffect, useState } from "react";

import {
    TransactionsWrapper,
    TransactionsHeader,
    TransactionsTitle,
    SearchContainer,
    TabsContainer,
    MobileContainer 
} from "../../components/Transactions/reviewsRatings.styles";
import SearchComponent from "@/components/search/search";
import Approved from "@/components/Transactions/reviews/approved";
import Requested from "@/components/Transactions/reviews/requested";
import { paginationData } from "../../utils/paginationData";
import ReviewsRaatingsTabs, { ReviewTabContent } from "@/components/Transactions/reviews/reviewsTab/tabsComponent";
import ApprovedMobile from "@/components/Transactions/reviews/mobileView/apprroved";
import RequestedMobile from "@/components/Transactions/reviews/mobileView/requested";
import usePagination from "../pagination/usePagination";

const Reviews = () => {
    const [selected, setSelected] = useState("Approved");

      const handleTabClick = (tab) => {
        setSelected(tab)
    }
    const itemsPerPage = 5;

    const { currentPage, totalPages, currentPageData, onPageChange } = usePagination(paginationData,itemsPerPage);
    
      const [reviews, setReviews] = useState(paginationData);
    
      const handleApprove = (reviewId) => {
        // Find the review with the matching ID and update its "approved" status
        const updatedReviews = reviews.map((review) =>
          review.id === reviewId ? { ...review, approved: true } : review
        );
        // Update the state with the modified data
        setReviews(updatedReviews);
      };
    
      const handleDelete = (reviewId) => {
        // Filter out the review with the specified ID
        const updatedReviews = reviews.filter((review) => review.id !== reviewId);
    
        // Update the state to remove the deleted review
        setReviews(updatedReviews);
      };

    return (
          <TransactionsWrapper>
            <TransactionsTitle>Reviews</TransactionsTitle>
            <TransactionsHeader>
                    <TabsContainer>
                    <SearchContainer>
                      <SearchComponent /> 
                    </SearchContainer>
                        <ReviewsRaatingsTabs
                            tabs={[
                            {
                              label: "Approved",
                              count: 3, 
                            },
                            {
                              label: "Requested",
                              count: 2, 
                            },
                            ]}
                            selected={selected}
                            setSelected={handleTabClick}
                            >
                            <ReviewTabContent isSelected={selected === "Approved"}>
                                <Approved 
                                   reviews={reviews}
                                   currentPageData={currentPageData} 
                                   currentPage={currentPage}
                                   totalPages={totalPages}
                                   onPageChange={onPageChange}
                                   onApprove={handleApprove} 
                                   onDelete={handleDelete}
                                />
                                <MobileContainer>
                                   <ApprovedMobile 
                                    reviews={reviews}
                                    currentPageData={currentPageData} 
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={onPageChange}
                                    onApprove={handleApprove} 
                                    onDelete={handleDelete}
                                   />
                                </MobileContainer>
                            </ReviewTabContent>
                            <ReviewTabContent isSelected={selected === "Requested"}>
                                <Requested 
                                  reviews={reviews}
                                   currentPageData={currentPageData} 
                                   currentPage={currentPage}
                                   totalPages={totalPages}
                                   onPageChange={onPageChange}
                                   onApprove={handleApprove} 
                                   onDelete={handleDelete}
                                />
                                <MobileContainer>
                                   <RequestedMobile 
                                    reviews={reviews}
                                    currentPageData={currentPageData} 
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={onPageChange}
                                    onApprove={handleApprove} 
                                    onDelete={handleDelete}
                                   />
                                </MobileContainer>
                            </ReviewTabContent>
                        </ReviewsRaatingsTabs>
                    </TabsContainer>
            </TransactionsHeader>
            </TransactionsWrapper> 
    );
  };
  
  export default Reviews;
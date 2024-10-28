import React from "react";

import {
    TransactionsWrapper,
    TransactionsHeader,
    TransactionsTitle,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    DescriptionCell,
    FileIcon,
    CardContainer,
    MetricsBoxContainer,
    MetricsBox,
    MetricsItems,
    TopText,
    BottomText,
    SmallText,
    UserIconWrapper,
    UserIcon,
    PaymentMethodText,
    SearchContainer,
    IconCell,
    RowWrrapper 
} from "../../components/Transactions/billingsMobile.styles";
import SearchComponent from "@/components/search/search";

const BillingsMobile = () => {
    
    const billingssStats = [
        {
          planTitle: "Plan",
          plan: "Standard",
          text: "Change Plan",
          billing: "#3E46B6"
        },
        {
          planTitle: "Plan Cost",
          plan: "$40/month",
          text: "Billed Monthly",
        },
         {
          planTitle: "Renewal Date",
          plan: "September 20, 2023",
          text: "Cancel Subscription",
          date: "1.125rem",
          cancelcub: "#DE786D"
        },
        ]  
    return (
        <>
        <TransactionsWrapper>
        <TransactionsTitle>Billing History</TransactionsTitle>
            <TransactionsHeader>
            <SearchContainer>
                <SearchComponent />
            </SearchContainer>
        </TransactionsHeader>
        <TableContainer>
            <TableHeader>        
                <RowWrrapper>
                    <TableRow>
                        <TableCell $headercolor $headerweight>PLAN</TableCell>
                        <TableCell>Standard</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>BILLING DATE</TableCell>
                        <TableCell>20/2/2023</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>DURATION</TableCell>
                        <TableCell>30 Days</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>PAYMENT METHOD</TableCell>
                        <TableCell>
                             <PaymentMethodText>5684</PaymentMethodText>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>AMOUNT</TableCell>
                        <TableCell>$40</TableCell>
                    </TableRow>
                    <TableRow $borderbottom $marbottom>
                      
                    </TableRow>

                    <TableRow>
                        <TableCell $headercolor $headerweight>PLAN</TableCell>
                        <TableCell>Standard</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>BILLING DATE</TableCell>
                        <TableCell>20/2/2023</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>DURATION</TableCell>
                        <TableCell>30 Days</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>PAYMENT METHOD</TableCell>
                        <TableCell>
                             <PaymentMethodText>5684</PaymentMethodText>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>AMOUNT</TableCell>
                        <TableCell>$40</TableCell>
                    </TableRow>
                    <TableRow $borderbottom $marbottom>
                       
                    </TableRow>

                    <TableRow>
                        <TableCell $headercolor $headerweight>PLAN</TableCell>
                        <TableCell>Standard</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>BILLING DATE</TableCell>
                        <TableCell>20/2/2023</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>DURATION</TableCell>
                        <TableCell>30 Days</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>PAYMENT METHOD</TableCell>
                        <TableCell>
                             <PaymentMethodText>5684</PaymentMethodText>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>AMOUNT</TableCell>
                        <TableCell>$40</TableCell>
                    </TableRow>
                    <TableRow $borderbottom $marbottom>
                       
                    </TableRow>

                    <TableRow>
                        <TableCell $headercolor $headerweight>PLAN</TableCell>
                        <TableCell>Standard</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>BILLING DATE</TableCell>
                        <TableCell>20/2/2023</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>DURATION</TableCell>
                        <TableCell>30 Days</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>PAYMENT METHOD</TableCell>
                        <TableCell>
                             <PaymentMethodText>5684</PaymentMethodText>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>AMOUNT</TableCell>
                        <TableCell>$40</TableCell>
                    </TableRow>
                    <TableRow $borderbottom $marbottom>
                        
                    </TableRow>

                    <TableRow>
                        <TableCell $headercolor $headerweight>PLAN</TableCell>
                        <TableCell>Standard</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>BILLING DATE</TableCell>
                        <TableCell>20/2/2023</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>DURATION</TableCell>
                        <TableCell>30 Days</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>PAYMENT METHOD</TableCell>
                        <TableCell>
                             <PaymentMethodText>5684</PaymentMethodText>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell $headercolor $headerweight>AMOUNT</TableCell>
                        <TableCell>$40</TableCell>
                    </TableRow>
                    <TableRow $borderbottom $marbottom>
                       
                    </TableRow>
                </RowWrrapper>
            </TableHeader>     
        </TableContainer>
        </TransactionsWrapper> 
        </>
    );
  };
  
  export default BillingsMobile;

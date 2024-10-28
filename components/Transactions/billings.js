import React from "react";

import {
    TransactionsWrapper,
    TransactionsHeader,
    TransactionsTitle,
    TableContainer,
    TBodyContainer,
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
    MobileContainer 
} from "../../components/Transactions/billings.styles";
import SearchComponent from "@/components/search/search";
import BillingsMobile from "@/components/Transactions/billingsMobile";

const Billings = () => {
    
    const billingssStats = [
        {
          plantitle: "Plan",
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
          cancelsub: "#DE786D"
        },
        ]  
    return (
        <>
        <CardContainer>
            <MetricsBoxContainer>
            {billingssStats.map(({ planTitle, plan, text, billing, cancelsub, date }, idx) => (
                <MetricsBox  key={idx}>
                    <MetricsItems>
                        <TopText>{planTitle}</TopText>
                        <BottomText $date={date}>{plan}</BottomText>
                    </MetricsItems>
                    <MetricsItems>
                        <TopText $cancelsub={cancelsub} $billing={billing}>{text}</TopText>
                    </MetricsItems>
                </MetricsBox>
              ))}
            </MetricsBoxContainer>
        </CardContainer>
        <>
        <TransactionsWrapper>
            <TransactionsTitle>Billing History</TransactionsTitle>
            <TransactionsHeader>
            <SearchContainer>
                <SearchComponent />
            </SearchContainer>
        </TransactionsHeader>
        <TableContainer>
            <TBodyContainer>
                <TableRow>
                    <TableHeader $headercolor $headerweight>S/N</TableHeader>
                    <TableHeader $headercolor $headerweight>PLAN</TableHeader>
                    <TableHeader $headercolor $headerweight>BILLING DATE</TableHeader>
                    <TableHeader $headercolor $headerweight>DURATION</TableHeader>
                    <TableHeader $headercolor $headerweight>
                        <PaymentMethodText>PAYMENT METHOD</PaymentMethodText>
                    </TableHeader>
                    <TableHeader $headercolor $headerweight>AMOUNT</TableHeader>
                </TableRow>

                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>20/2/2023</TableCell>
                        <TableCell>30 Days</TableCell>
                        <TableCell>
                        <PaymentMethodText>5684</PaymentMethodText>
                        </TableCell>
                        <TableCell>$40</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>20/2/2023</TableCell>
                        <TableCell>30 Days</TableCell>
                        <TableCell>
                            <PaymentMethodText>5684</PaymentMethodText>
                        </TableCell>
                        <TableCell>$40</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>20/2/2023</TableCell>
                        <TableCell>30 Days</TableCell>
                        <TableCell>
                            <PaymentMethodText>5684</PaymentMethodText>
                        </TableCell>
                        <TableCell>$40</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>20/2/2023</TableCell>
                        <TableCell>30 Days</TableCell>
                        <TableCell>
                            <PaymentMethodText>5684</PaymentMethodText>
                        </TableCell>
                        <TableCell>$40</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>20/2/2023</TableCell>
                        <TableCell>30 Days</TableCell>
                        <TableCell>
                            <PaymentMethodText>5684</PaymentMethodText>
                        </TableCell>
                        <TableCell>$40</TableCell>
                    </TableRow>
            </TBodyContainer>
                
        </TableContainer>
        </TransactionsWrapper> 
        <MobileContainer>
             <BillingsMobile />             
         </MobileContainer>
        </>
        </>
    );
  };
  
  export default Billings;

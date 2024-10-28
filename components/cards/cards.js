import React from "react";

import {
    MetricsBoxContainer,
    MetricsBox,
    MetricsItems,
    TopText,
    BottomText,
    SmallText,
} from "./cards.styles";
const Cards = () => {

    const artistsStats = [
        {
          title: "Available Balance",
          subtitle: "Payouts Method",
          transfer: "Bank Transfer",
          bal: "$23,024.53",
          totalTitle: "Total Withdrawal",
          totallBal: "$2,024.53",
        },
        {
          title: "Total Earnings",
          smallText: "Total amount earned from projects",
          totalTitle: "Total Spending",
          bal: "$23,024.53",
          spending: "Total amount spent on projects",
          totallBal: "$2,024.53",
        },
         {
          title: "Total Expected Funds",
          smallText: "Total amount earned from projects",
          totalTitle: "Total Expected Payment",
          bal: "$23,024.53",
          spending: "Total amount spent on projects",
          totallBal: "$2,024.53",
        },
        ]  
    return (
        <MetricsBoxContainer>
              {artistsStats.map(({ title, bal, subtitle, smallText, spending, totalTitle, transfer, totallBal,  }, idx) => (
                <MetricsBox>
                    <MetricsItems  key={idx}>
                        <TopText>{title}</TopText>
                        <BottomText $bottompad>{bal}</BottomText>
                        <SmallText>{smallText}</SmallText>
                    </MetricsItems>
                    <MetricsItems>
                        <TopText>{subtitle}</TopText>
                        <BottomText $newsize>{transfer}</BottomText>
                    </MetricsItems>
                    <MetricsItems>
                        <TopText>{totalTitle}</TopText>
                        <BottomText $newsize>{totallBal}</BottomText>
                        <SmallText>{spending}</SmallText>
                    </MetricsItems>
                </MetricsBox>
                ))}
        </MetricsBoxContainer>
    );
  };
  
  export default Cards;
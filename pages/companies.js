import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import Companies from "@/components/companies";

export default function DashboardPage() {
    return (
        <ReusableComponent pageLabel="Companies">
            <Companies />
        </ReusableComponent>
   )
}
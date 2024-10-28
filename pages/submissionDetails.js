import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import DetailsTab from "@/components/submissionDetails";

export default function DetailsTabPage() {
    return (
        <ReusableComponent pageLabel="Submission Details">
            <DetailsTab />
        </ReusableComponent>
   )
}
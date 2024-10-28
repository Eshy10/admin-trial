import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import ManageRequest from "@/components/manageRequest";

export default function ManageRequestPage() {
    return (
        <ReusableComponent pageLabel="Request Details">
            <ManageRequest />
        </ReusableComponent>
   )
}
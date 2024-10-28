import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import RequestDetailsForm from "@/components/requestDetails";

export default function RequestDetailsFormPage() {
    return (
        <ReusableComponent pageLabel="Add a New Artist">
            <RequestDetailsForm />
        </ReusableComponent>
   )
}
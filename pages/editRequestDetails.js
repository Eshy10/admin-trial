import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import EditRequestDetailsForm from "@/components/editRequestDetails";

export default function EditRequestDetailsFormPage() {
    return (
        <ReusableComponent pageLabel="Edit Request">
            <EditRequestDetailsForm />
        </ReusableComponent>
   )
}
import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import EditRequestForm from "@/components/editRequest";

export default function EditRequestPage() {
    return (
        <ReusableComponent pageLabel="Edit Request">
            <EditRequestForm />
        </ReusableComponent>
   )
}
import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import NewRequestForm from "@/components/newRequest";

export default function NewRequestPage() {
    return (
        <ReusableComponent pageLabel="Create a New Request">
            <NewRequestForm />
        </ReusableComponent>
   )
}
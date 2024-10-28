import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import ImporttantInformationForm from "@/components/importantInfo";

export default function ImporttantInformationPage() {
    return (
        <ReusableComponent pageLabel="Add a New Artist">
            <ImporttantInformationForm />
        </ReusableComponent>
   )
}
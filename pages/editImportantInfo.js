import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import EditImporttantInformationForm from "@/components/editImportantInfo";

export default function EditImpottantInfoPage() {
    return (
        <ReusableComponent pageLabel="Edit Request">
            <EditImporttantInformationForm />
        </ReusableComponent>
   )
}
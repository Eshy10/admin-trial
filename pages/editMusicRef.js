import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import EditMusicReferencesForm from "@/components/editMusicRef";

export default function EditMusicReferencesPage() {
    return (
        <ReusableComponent pageLabel="Edit Request">
            <EditMusicReferencesForm />
        </ReusableComponent>
   )
}
import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import MusicReferencesForm from "@/components/musicRef";

export default function MusicReferencesPage() {
    return (
        <ReusableComponent pageLabel="Add a New Artist">
            <MusicReferencesForm />
        </ReusableComponent>
   )
}
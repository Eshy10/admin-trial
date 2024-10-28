import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import ArtistOtherInfo from "@/components/newArtistInfo";

export default function NewArtistPage() {
    return (
        <ReusableComponent pageLabel="Add a New Artist">
            <ArtistOtherInfo />
        </ReusableComponent>
   )
}
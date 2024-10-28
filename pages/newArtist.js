import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import NewArtist from "@/components/newArtist";

export default function NewArtistPage() {
    return (
        <ReusableComponent pageLabel="Add a New Artist">
            <NewArtist />
        </ReusableComponent>
   )
}
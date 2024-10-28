import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import ArtistSocialInfo from "@/components/newArtistSocial";

export default function NewArtistPage() {
    return (
        <ReusableComponent pageLabel="Add a New Artist">
            <ArtistSocialInfo />
        </ReusableComponent>
   )
}
import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import ArtistProfile from "@/components/artistProfile";

export default function ArtistProfilePage() {
    return (
        <ReusableComponent pageLabel="Artist Profile"> 
            <ArtistProfile />
        </ReusableComponent>
   )
}
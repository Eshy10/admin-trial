import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import Artist from "@/components/artists";

export default function ArtistPage() {
    return (
        <ReusableComponent pageLabel="Artists">
            <Artist />
        </ReusableComponent>
   )
}
import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import MusicSync from "@/components/musicSync";

export default function MusicSyncPage() {
    return (
        <ReusableComponent pageLabel="Music Sync">
            <MusicSync />
        </ReusableComponent>
   )
}
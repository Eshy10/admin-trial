import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import SettingsComponent from "@/components/settings"

export default function SettingsPage() {
    return (
        <ReusableComponent pageLabel="Settings">
            <SettingsComponent />
        </ReusableComponent>
    )
}
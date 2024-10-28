import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import MessagesComponent from "@/components/messages/index.jsx"

export default function MessagesPage() {
    return (
        <ReusableComponent pageLabel="Messages">
            <MessagesComponent/>
        </ReusableComponent>
    )
}
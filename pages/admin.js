import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import AdminManagement from "@/components/adminManagement";

export default function AdminManagementPage() {
    return (
        <ReusableComponent pageLabel="Admin Management">
            <AdminManagement />
        </ReusableComponent>
   )
}
import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import EditAdminUser from "@/components/adminManagement/editAdminUser";

export default function EditAdminUserPage() {
    return (
        <ReusableComponent pageLabel="Edit Admin User">
            <EditAdminUser />
        </ReusableComponent>
   )
}
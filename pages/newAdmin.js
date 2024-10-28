import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import NewAdminUser from "@/components/adminManagement/newAdmin";

export default function NewAdminUserPage() {
    return (
        <ReusableComponent pageLabel="Add a New Admin User">
            <NewAdminUser />
        </ReusableComponent>
   )
}
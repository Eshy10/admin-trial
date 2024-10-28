import React from "react";
import ReusableComponent from "@/components/reusable/reusable";
import Company from "@/components/companies/companyPage";
import { useRouter } from 'next/router';
import { companyData } from "@/utils/companyData";

export default function DashboardPage() {
    const router = useRouter();
    const { id } = router.query;

    const company = companyData.find(company => company.id === id);

    if (!company) return null;

    return (
        <ReusableComponent pageLabel={company?.name}>
            <Company {...company} id={id} />
        </ReusableComponent>
    )
}
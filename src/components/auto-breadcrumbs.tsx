"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { useBreadcrumbs } from "@/hooks/use-breadcrumbs"
import { useTenant } from "@/services/client/tenantProvider"
import Link from "next/link"
import React from "react"

export function AutoBreadcrumbs() {
    const crumbs = useBreadcrumbs();
    const tenant = useTenant();

    const tenantCrumb = {
        label: tenant.name,
        href: '#'
    };

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {[tenantCrumb, ...crumbs.slice(1)].map((crumb, index) => (
                    <React.Fragment key={crumb.label}>
                        {index > 0 && <BreadcrumbSeparator />}
                        <BreadcrumbItem>
                            {index === crumbs.length - 1 ? (
                                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink asChild>
                                    <Link href={crumb.href}>{crumb.label}</Link>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

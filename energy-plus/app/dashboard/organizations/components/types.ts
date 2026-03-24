"use client";

export type OrganizationRow = {
    id: string;
    name: string | null;
    slug: string | null;
    created_by: string | null;
    created_at: string | null;
};

export type PropertyRow = {
    id: string;
    organization_id: string;
    jurisdiction_id: string | null;
    street: string | null;
    city: string | null;
    state: string | null;
    zip: number | null;
    sq_ft: number | null;
    property_type: string | null;
    created_at: string | null;
};

export type JurisdictionRow = {
    id: string;
    name: string | null;
    slug: string | null;
    type: string | null;
    parent_id: string | null;
};

export type OrganizationWithProperties = OrganizationRow & {
    properties: PropertyRow[];
};

export type Notice = {
    type: "success" | "error";
    message: string;
} | null;

export type NewPropertyForm = {
    organization_id: string;
    jurisdiction_id: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    sq_ft: string;
    property_type: string;
};
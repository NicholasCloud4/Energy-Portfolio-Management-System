# SD_Project_CEN_4910C_Group_One

# **Frontend / Backend Architecture**

This document explains how the frontend dashboard connects to the Supabase backend, how authentication and authorization are handled, and how data flows through the system.

It is intended to be used as a reference when building features.

## **Tech Stack Overview**

**Frontend**

-   React (Next.js or Vite)
    
-   MUI X
    
    -   DataGrid
        
    -   Charts
        
    -   Date Pickers
        
-   Supabase JavaScript client
    

**Backend**

-   Supabase Auth
    
-   PostgreSQL
    
-   Row Level Security (RLS)
    
-   SQL views (recommended for complex reads)
    

## **Authentication & Identity Model**

**Auth Source of Truth**

-   Authentication is handled by **Supabase Auth**
    
-   Each authenticated user exists in `auth.users`
    

**Application Profile**  
Every authenticated user must have a corresponding record in:

`public.profiles`

**Key points:**

-   `profiles.id` must equal `auth.users.id`
    
-   Stores application-specific identity data
    
-   Used as the foreign key for nearly all relationships
    

## **Account & Role Model**

**Account Types (Platform-Level)**  
Stored on `profiles.account_type`:

-   `user` – standard user
    
-   `admin` – platform administrator
    
-   `auditor` – read-only, jurisdiction-scoped access
    

**Organization Roles (Organization-Level)**  
Stored on `organization_members.role`:

-   `owner`
    
-   `admin`
    
-   `member`
    
-   `auditor`
    

_A user may have different roles in different organizations._

## **Authorization Model**

Authorization is enforced using **PostgreSQL Row Level Security (RLS)** combined with relational joins.

**Organization-Based Access**  
Users gain access to organization data through:

`organization_members`

This table determines:

-   Which organizations a user belongs to
    
-   What role they have within each organization
    
-   Which properties and energy data they can access
    

**Jurisdiction-Based Access (Auditors)**  
Auditor visibility is granted through:

`auditor_jurisdictions`

This allows hierarchical access:

-   City auditors -> all properties in a city
    
-   County auditors -> all cities in a county
    
-   State auditors -> all counties and cities in a state
    

Jurisdiction hierarchy is defined in:

`jurisdictions`

## **Core Domain Concepts**

**Organizations**  
Top-level ownership entity.

`organizations`

Responsibilities:

-   Own properties
    
-   Own teams
    
-   Manage members
    

**Teams**  
Logical groupings within an organization.

`teams`

Used for:

-   Delegating work
    
-   Organizing members
    
-   Permission grouping (optional UI-level usage)
    

**Contacts**  
External people added by users.

`contacts`

Purpose:

-   Invitation workflow
    
-   External collaboration
    
-   Not full users until invited
    

**Properties**  
Physical locations tracked for energy usage.

`properties`

Key relationships:

-   Belongs to an organization
    
-   Assigned to a jurisdiction
    
-   Has monthly energy usage and scores
    

**Jurisdictions**  
Geographic hierarchy.

`jurisdictions`

Supports:

-   `state`
    
-   `county`
    
-   `city`
    

Uses `parent_id` to build a tree structure.

## **Energy Data Model**

**Energy Usage**  
Raw monthly data entered by users.

`energy_usage`

Characteristics:

-   One record per property per billing month
    
-   Stores kWh usage and cost
    
-   Tracks who entered the data
    

**Energy Scores**  
Calculated performance results.

`energy_scores`

Rules:

-   Score range: 1–100
    
-   `pass` if score ≥ 50
    
-   `fail` if score < 50
    
-   Derived from energy usage and property metrics
    

## **Supabase Query Primer (Frontend)**

This section explains how Supabase queries are used in the frontend, focusing on intent rather than syntax.

**Fetching the Current User Profile**

```
const { data: profile } = await supabase
    .from('profiles')   
    .select('*')   
    .single();
```

**What this does**

-   Retrieves the application profile for the currently authenticated user
    

**Why this exists**

-   Supabase Auth provides identity only
    
-   Application roles and permissions live in `profiles`
    

**When this runs**

-   After login
    
-   On app initialization
    
-   On protected route access
    

**Important notes**

-   `.single()` enforces exactly one row
    
-   RLS relies on `auth.uid()` internally
    

**Fetching Organizations for the Current User**

```
const { data: organizations } = await supabase
    .from('organization_members')   
    .select(` organization_id, role, organizations(name, slug)`);
```

**What this does**

-   Returns all organizations the user belongs to
    
-   Includes the user’s role within each organization
    

**Why this exists**

-   Drives organization switchers
    
-   Determines dashboard scope and permissions
    

**Fetching Properties for an Organization**

```
const { data: properties } = await supabase
    .from('properties')   
    .select('*')   
    .eq('organization_id', organizationId);
```

**What this does**

-   Loads all properties belonging to a selected organization
    

**Why this exists**

-   Properties are the primary unit of energy tracking
    

**Fetching Monthly Energy Usage**

```
const { data: usage } = await supabase
   .from('energy_usage')
   .select('*')
   .eq('property_id', propertyId)
   .order('billing_month', { ascending: false });
```

**What this does**

-   Retrieves historical monthly energy usage for a property
    

**Why this exists**

-   Powers tables, charts, and trend analysis
    

**Fetching Energy Scores**

```
const { data: scores } = await supabase
   .from('energy_scores')
   .select('*')
   .eq('property_id', propertyId);
```

**What this does**

-   Retrieves calculated energy performance scores
    

**Why this exists**

-   Used for compliance, reporting, and pass/fail logic
    

## **MUI X Integration Notes**

This backend schema is optimized for **dashboard-style UIs** using MUI X.

**Recommended usage:**

-   **DataGrid**
    
    -   Organizations
        
    -   Properties
        
    -   Energy usage
        
    -   Auditor reports
        
-   **Charts**
    
    -   Monthly consumption trends
        
    -   Cost vs usage
        
    -   Score history
        
-   **Date Pickers**
    
    -   Billing month selection
        
    -   Report filtering
        

Data is intentionally structured to return **flat, grid-friendly datasets**.

## **Glossary**

**RLS (Row Level Security)**  
PostgreSQL rules that restrict which rows a user can read or write.

**auth.uid()**  
Supabase helper that returns the authenticated user’s UUID.

**Account Type**  
Platform-wide role stored on `profiles`.

**Organization Role**  
Role scoped to a specific organization.

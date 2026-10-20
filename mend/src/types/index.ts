export type ItemCategory = 
| "electronics"
| "home"
| "education"
| "other";

export type ItemCondition = 
| "broken"
| "unused"
| "repairable";

export type ItemStatus = 
| "open"
| "matched"
| "in_progress"
| "resolved";

export type ItemOutcome = 
| "repaired"
| "reused"
| "donated"
| "recycled"
| "not_recovable"
| "unknown";

export type VerificationLevel =
| "user_reported"
| "organization_confirmed"
| "moderator_verified";

export interface ItemReport {
    id: string;
    title: string;
    description: string;
    category: ItemCategory;
    condition: ItemCondition;
    status: ItemStatus;
    location: string;
    imageUrl?: string;
    createdAt: string;
    outcome?: ItemOutcome;
    verificationLevel?: VerificationLevel;
}

export type OrganizationType =
| "repair"
| "reuse"
| "donation"
| "recycling";

export interface Organization {
    id: string;
    name: string;
    description: string;
    type: OrganizationType;
    serviceCategories: ItemCategory[];
    location: string;
    isVerified: boolean;
    isActive: boolean;
}

export interface ImpactMetrics {
    totalReports: number;
    resolvedCases: number;
    repairedItems: number;
    reusedItems: number;
    donatedItems: number;
    recycledItems: number;
    participatingOrganizations: number;
}

export type ItemCategoryFilter = ItemCategory | "all";

export type ItemStatusFilter = ItemStatus | "all";
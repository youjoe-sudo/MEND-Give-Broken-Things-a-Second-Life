import type {
    ImpactMetrics,
    ItemReport,
    Organization,
} from "../types"

export const deomItems: ItemReport[] = [
    {
        id: "demo-1",
        title: "Labtob sokhon",
        description: "meshhhhh mohem",
        category: "electronics",
        condition: "repairable",
        status: "open",
        location: "Cairo",
        imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
        createdAt: "2026-10-18T01:00:00Z"
    },
    {
        id: "demo-2",
        title: "Labtob sokhon",
        description: "meshhhhh mohem",
        category: "electronics",
        condition: "repairable",
        status: "open",
        location: "Cairo",
        imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
        createdAt: "2026-10-18T01:01:00Z"
    },
    {
        id: "demo-3",
        title: "Labtob sokhon",
        description: "meshhhhh mohem",
        category: "electronics",
        condition: "repairable",
        status: "open",
        location: "Cairo",
        imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
        createdAt: "2026-10-18T01:00:00Z"
    }
    
];

export const demoOrganizations: Organization[] = [
    {
        id: "org-1",
        name: "ORG 001",
        description: "MESHHHHHHHH MOHEEEEEMMMMMMMM",
        type: "repair",
        serviceCategories: ["electronics", "home"],
        location: "CARITO",
        isVerified: true,
        isActive: true,
    },
     {
        id: "org-2",
        name: "ORG 002",
        description: "MESHHHHHHHH MOHEEEEEMMMMMMMM",
        type: "repair",
        serviceCategories: ["electronics", "home"],
        location: "CARITO",
        isVerified: true,
        isActive: true,
    },
     {
        id: "org-3",
        name: "ORG 003",
        description: "MESHHHHHHHH MOHEEEEEMMMMMMMM",
        type: "repair",
        serviceCategories: ["electronics", "home"],
        location: "CARITO",
        isVerified: false,
        isActive: true,
    }
];

export const demoImpactMetrics: ImpactMetrics = {
    totalReports: 128,
    resolvedCases: 74,
    repairedItems: 39,
    reusedItems: 21,
    donatedItems: 9,
    recycledItems: 5,
    participatingOrganizations: 12,
};

export const DEMO_DATA_NOTICE = "Demo w khalaaaaaaassssssss"
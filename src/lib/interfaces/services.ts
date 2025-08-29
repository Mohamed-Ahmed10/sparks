export const allowedServices = [
    "2d-animation",
    "3d-animation",
    "media-production",
    "creative-solutions",
    "film-making-production",
] as const;

export type ServiceName = typeof allowedServices[number];

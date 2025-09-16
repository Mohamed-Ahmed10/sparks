import { allowedServices } from "@/lib/interfaces/services";
import { notFound } from "next/navigation";
import ServiceClient from "./ServiceClient";

// Define the type for params
type ServiceParams = {
    servicename: '2d-animation' | '3d-animation' | 'media-production' | 'creative-solutions' | 'film-making-production';
};

// This is a server component
export default async function Page({
    params,
}: {
    params: Promise<ServiceParams>;
}) {
    const { servicename } = await params;

    if (!allowedServices.includes(servicename)) {
        notFound();
    }

    return <ServiceClient servicename={servicename} />;
}

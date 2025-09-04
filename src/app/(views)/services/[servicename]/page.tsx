import { allowedServices } from "@/lib/interfaces/services"
import { notFound } from "next/navigation"
import ServiceClient from "./ServiceClient"

// This is a server component
export default async function Page({
    params,
}: {
    params: { servicename: '2d-animation' | '3d-animation' | 'media-production' | 'creative-solutions' | 'film-making-production' }
}) {
    const { servicename } = params

    if (!allowedServices.includes(servicename)) { notFound() }
    return (
        <ServiceClient servicename={servicename} />
    )
}

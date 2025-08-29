
import { allowedServices } from "@/lib/interfaces/services"
import { notFound } from "next/navigation"

export default async function Page({
    params,
}: {
    params: Promise<{ servicename: '2d-animation' | '3d-animation' | 'media-production' | 'creative-solutions' | 'film-making-production' }>
}) {
    const { servicename } = await params
    console.log(servicename)

    if (!allowedServices.includes(servicename)) { notFound() }
    return (
        <div>this is footer {servicename}</div>
    )
}

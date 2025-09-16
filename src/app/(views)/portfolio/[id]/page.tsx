const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    console.log(id)
    return (<div>This is Product details {id}</div>);
}

export default Page;

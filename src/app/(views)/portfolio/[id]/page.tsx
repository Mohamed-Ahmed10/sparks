const Page = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    console.log(id)
    return (<div>This is Product details {id}</div>);
}

export default Page;

const page = ( { params }: { params: { itemID: string } } ) => {
    return (
        <div>
            Item ID: {params.itemID}
        </div>
    );
}

export default page;
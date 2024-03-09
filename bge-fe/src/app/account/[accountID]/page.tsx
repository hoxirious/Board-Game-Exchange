const page = ({ params }: { params: { accountID: string } }) => {
    return (
        <div>
            Account ID: {params.accountID}
        </div>
    );
}

export default page;
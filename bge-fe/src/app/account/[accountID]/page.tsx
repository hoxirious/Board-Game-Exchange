const page = ({ params }: { params: { accountID: string } }) => {
    return (
        <div className="text-success">
            Account ID: {params.accountID}
        </div>
    );
}

export default page;
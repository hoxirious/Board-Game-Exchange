const page = ({ params }: { params: { accountID: string } }) => {
    return (
        <div className="text-success bg-primary-200">
            Account ID: {params.accountID}
        </div>
    );
}

export default page;
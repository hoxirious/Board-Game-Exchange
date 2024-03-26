import NavBar from "@/components/NavBar/NavBar";

const page = ({ params }: { params: { accountID: string } }) => {
    return (
        <div className="">
            <NavBar />
            Account ID: {params.accountID}
        </div>
    );
}

export default page;
"use client"

import NavBar from "@/components/NavBar/NavBar";
import AccountInfo from "./components/AccountInfo/AccountInfo";

const page = ({ params }: { params: { accountID: string } }) => {
    return (
        <div className="">
            <NavBar />
            <AccountInfo accountID={params.accountID} />
            Account ID: {params.accountID}
        </div>
    );
}

export default page;
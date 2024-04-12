import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import useSWR  from 'swr'
import Link from 'next/link'

const fetcher = url => fetch(url).then(r => r.json());
const UserInfo = ({ userID } : { userID : string }) => {
    const { data, error, isLoading } = useSWR(`http://localhost:8080/users/${userID}`, fetcher)

    if(isLoading) return (<div>Loading</div>)

    return (
        <>
            {/* TODO: make this clickable and go to user profile. */}
            <Link href={`/account/${userID}`}>
                <Avatar className="inline-block align-middle">
                    <AvatarImage src={data.profilePictureUrl} alt="user profile picture"/>
                    <AvatarFallback className="bg-primary text-white">BGE</AvatarFallback>
                </Avatar>
                <span className="inline-block p-2">{data.username}</span>
            </Link>
        </>
    );
}

export default UserInfo;
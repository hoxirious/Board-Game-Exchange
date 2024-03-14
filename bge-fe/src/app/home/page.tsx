import { Button } from "@/components/ui/button"

const page = () => {
    return (
        <div className="h-screen bg-black grid sm:grid-cols-1 sm:gap-1">
            <div className="flex flex-col  justify-center items-center">
                <p className="text-white text-lg">Sharing is Caring!</p>
                <p className="text-white text-sm">Share and gain new experiences from others by trading your old games at Board Game Exchange.</p>
            </div>
            <div className="grid bg-white grid-cols-2"> </div>
            <Button className="w-36" variant="default" size="sm">Start Trading Now!</Button>
        </div>
    );
}

export default page;

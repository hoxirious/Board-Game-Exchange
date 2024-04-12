import { cn } from '@/lib/utils'
import { CircleSlash2, Coffee, HeartCrack } from 'lucide-react'

export function BlankState({
    title,
    body,
    variant,
    className
}: {
    title: any,
    body: any,
    variant: string
}) {
    function icon() {
        switch(variant) {
            case 'loading': 
                return (<Coffee strokeWidth={1} size={150} className="block w-fit mx-auto" />)
            case '404': 
                return (<CircleSlash2 strokeWidth={1} size={150} className="block w-fit mx-auto" />)
            case 'error':
                return (<HeartCrack strokeWidth={1} size={150} className="block w-fit mx-auto" />)
            default:
                return (<RectangleEllipsis strokeWidth={1} size={150} className="block w-fit mx-auto" />)
        }
    }

    return (
        <div className={cn("text-center mt-16", className)}>
            {icon()}
            <h1 className="text-3xl mb-4">{title}</h1>
            <h2 className="text-2xl">{body}</h2>
        </div>
    );
}
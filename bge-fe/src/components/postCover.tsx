import Image from "next/image";
import { cn } from "@/lib/utils";
import { Post } from "@/app/listingView/data/post";

interface PostCoverProps extends React.HTMLAttributes<HTMLDivElement> {
    post: Post,
    postNameClassName?: string,
    postLocationClassName?: string,
}

export function PostCover({
    post,
    className,
    postNameClassName,
    postLocationClassName,
    ...props
}: PostCoverProps) {
    return (
        <section className={cn("", className)} {...props}>
            <div>
                <Image
                    src={post.postsPictureUrl[0]}
                    alt={post.title}
                    width={200}
                    height={200}
                    className="rounded-2xl mx-auto transition-all hover:scale-105"
                />
            </div>
            <div className="space-y-1 text-sm">
                <h3 className={cn("font-medium leading-none", postNameClassName)}>{post.title}</h3>
                <p className={cn("text-xs text-muted-foreground", postLocationClassName)}>{post.location}</p>
            </div>
        </section>
    )
}
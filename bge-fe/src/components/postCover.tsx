import Image from "next/image";
import Link from "next/link"
import { cn } from "@/lib/utils";
import { Post } from "@/app/home/data/post";
import { Card, CardContent } from "@/components/ui/card"

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
            <Link href={`/posts/${post._id}`}>
                <Card className="overflow-hidden rounded-lg">
                    <CardContent className="relative h-48 aspect-square overflow-hidden rounded-lg">
                    <Image
                        src={post.postsPictureUrl[0] ? post.postsPictureUrl[0] : ''}
                        alt={post.title}
                        fill={true}
                        priority={true}
                        sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 33vw"
                        className="relative object-cover transition-all hover:scale-105 rounded-lg overflow-hidden"
                    />
                    </CardContent>
                </Card>
            </Link>
            <div className="space-y-1 text-sm">
                <h3 className={cn("font-medium leading-none", postNameClassName)}>{post.title}</h3>
                <p className={cn("text-xs text-muted-foreground", postLocationClassName)}>{post.location}</p>
            </div>
        </section>

    )
}
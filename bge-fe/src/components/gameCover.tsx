import Image from "next/image";
import { cn } from "@/lib/utils";
import { Post } from "@/app/schema/Post";

interface GameCoverProps extends React.HTMLAttributes<HTMLDivElement> {
    game: Post,
    gameNameClassName?: string,
    gameLocationClassName?: string,
}

export function GameCover({
    game,
    className,
    gameNameClassName,
    gameLocationClassName,
    ...props
}: GameCoverProps) {
    return (
        <section className={cn("", className)} {...props}>
            <div>
                <Image
                    src={game.postsPictureUrl[0]}
                    alt={game.name}
                    width={200}
                    height={200}
                    className="rounded-2xl mx-auto transition-all hover:scale-105"
                />
            </div>
            <div className="space-y-1 text-sm">
                <h3 className={cn("font-medium leading-none", gameNameClassName)}>{game.title}</h3>
                <p className={cn("text-xs text-muted-foreground", gameLocationClassName)}>{game.location}</p>
            </div>
        </section>
    )
}

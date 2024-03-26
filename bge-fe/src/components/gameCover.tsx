import Image from "next/image";
import { cn } from "@/lib/utils";
import { Game } from "@/app/listingView/data/games";

interface GameCoverProps extends React.HTMLAttributes<HTMLDivElement> {
    game: Game
}

export function GameCover({
    game,
    className,
    ...props
}: GameCoverProps) {
    return (
        <section className={cn("space-y-3", className)} {...props}>
            <div>
                <Image 
                src={game.cover}
                alt={game.name}
                width={200}
                height={200}
                className={cn("rounded-2xl transition-all hover:scale-105")}
                />
            </div>
            <div className="space-y-1 text-sm">
                <h3 className="font-medium leading-none">{game.name}</h3>
                <p className="text-xs text-muted-foreground">{game.location}</p>
            </div>
        </section>
    )
}
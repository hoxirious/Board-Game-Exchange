export interface BoardGameCategory {
    name: string
    src: string
  }

export const boardGameCategories: BoardGameCategory[] = [
    {
        name: "Adventure",
        src: "/assets/images/board-game-categories/adventure.jpg"
    },
    {
        name: "Bluffing",
        src: "/assets/images/board-game-categories/bluffing.jpg"
    },
    {
        name: "Card Game",
        src: "/assets/images/board-game-categories/cardgame.jpg"
    },
    {
        name: "Civilization",
        src: "/assets/images/board-game-categories/civilization.jpg"
    },
    {
        name: "Economic",
        src: "/assets/images/board-game-categories/economic.jpg"
    },
    {
        name: "Exploration",
        src: "/assets/images/board-game-categories/exploration.jpg"
    },
    {
        name: "Fantasy",
        src: "/assets/images/board-game-categories/fantasy.jpg"
    },
    {
        name: "Medieval",
        src: "/assets/images/board-game-categories/medieval.jpg"
    },
    {
        name: "Party Game",
        src: "/assets/images/board-game-categories/partygame.jpg"
    },
    {
        name: "Strategy",
        src: "/assets/images/board-game-categories/strategy.jpg"
    }
]

export interface BoardGameCondition {
    name: string
}

export const boardGameConditions: BoardGameCondition[] = [
    {
        name: 'New'
    },
    {
        name: 'Used - Like New'
    },
    {
        name: 'Used - Good'
    },
    {
        name: 'Used - Fair'
    },
    {
        name: 'Used - Poor'
    }
]



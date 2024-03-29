'use client'

import useSWRMutation from 'swr/mutation'
import { useEffect, useRef } from 'react'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useState } from "react"

import { debounce } from "@/lib/utils"
import { SearchIcon } from 'lucide-react'

const QUERY_TITLES = {
    board_games: "What do you have?",
    owned_board_games: "What do you own?",
    location: "Where are you?"
}

interface BoardGameGenre {
    name: string
    src: string
}

const genres: BoardGameGenre[] = [
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
    }
]

function SuggestionsList({ data, className, onSelect }) {
    if (!data) {
        return (
            <div className={className}>
                <span className="block p-8 text-center">Loading...</span>
            </div>
        )
    }

    if (data != null) {
        return (
            <div className={className}>
                {/*
          We're using buttons here so that e.relatedTarget (when Input from
          SearchInput is blurred) is set to one of the buttons below.
         */}
                {data.map((item) => (
                    <button
                        className="w-full block p-4 hover:bg-primary-100 text-left border-b last:border-b-0"
                        key={item}
                        onClick={() => onSelect(item)}>{item}</button>
                ))}
            </div>
        )
    }
}

function useSuggestionsMutation(route) {
    // TODO: change when api working
    const fetcher = (url, { arg }: { arg: string }) => {
        return fetch(url + '?' + (new URLSearchParams({ query: arg })))
            .then(() => {
                // remove when api working
                if (arg === '') {
                    return [];
                }

                switch (url) {
                    case '/location-suggestions':
                        return ['city 1', 'city 2', 'city 3', 'city 4']
                    default:
                        return ['board game 1', 'board game 2', 'board game 3', 'board game 4']
                }
            }
            )
    };

    let { data, trigger, error, isMutating } = useSWRMutation(route, fetcher);

    return { data, trigger, error, isMutating };
}


function SuggestionsDisplay({ title, placeholder, givenSuggestion, onExit }) {
    // TODO: change to actual routes when api working...
    const routes = {
        board_games: 'board_game_suggestions',
        location: '/location-suggestions'
    };

    let route = routes.board_games;
    if (title === QUERY_TITLES.location) {
        route = routes.location;
    }

    let { data, trigger, error, isMutating } = useSuggestionsMutation(route);

    const [suggestion, setSuggestion] = useState("");

    function exit(value) {
        setSuggestion(value);
        onExit(value);
    }

    if (error) return <div>error</div>

    function handleKeyUp(e) {
        if (e.key === 'Enter') {
            exit(e.target.value);
            return;
        }

        const fetch = debounce(() => {
            trigger(e.target.value)
        }, 500);

        fetch();
    }

    function handleFocus(e) {
        const fetch = debounce(() => {
            trigger(e.target.value)
        }, 500);

        fetch();
    }

    return (
        <section className="flex flex-col space-y-1.5 bg-white p-4 rounded-md h-full overflow-y-auto">
            <section className="flex-none">
                <div className="flex flex-col space-y-1.5 h-full">
                    <div className="flex justify-between items-baseline">
                        <Label htmlFor="suggestion">{title}</Label>
                    </div>
                    <Input
                        id="suggestion"
                        className="text-md"
                        placeholder={placeholder}
                        defaultValue={givenSuggestion}
                        autoFocus
                        onKeyUp={handleKeyUp}
                        autoComplete="off"
                        onFocus={handleFocus} />
                </div>
            </section>
            <section className="flex-auto">
                <SuggestionsList data={data} onSelect={exit} />
            </section>
        </section>
    );
}

function CategorySelect({ query, onSelect }) {
    return (
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <fieldset className="flex w-full space-x-4 p-4">
                {genres.map((genre) => (
                    <div key={genre.name}>
                        <input id={genre.name} type="radio" value={genre.name} name="genre" className="inline-block peer hidden" onChange={(e) => onSelect(e.target.value)} checked={query.board_game_genre === genre.name} />
                        {/* Bug: on mobile, not turning blue when selected */}
                        <label htmlFor={genre.name} className="w-24 h-24 inline-block shrink-0 bg-black-900 border-2 border-transparent peer-checked:border-primary rounded-md overflow-hidden">
                            <Image
                                alt={genre.name}
                                width={72}
                                height={72}
                                src={genre.src}
                                className="h-fit w-fit object-cover"
                            />
                        </label>
                        <figcaption className="text-sm">{genre.name}</figcaption>
                    </div>
                ))}
            </fieldset>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}

// TODO: make multiple select
function SearchQueryForm({ query, onSearch, onSelectCategory }) {
    return (
        <div className="grid grid-cols-1 w-full items-center gap-4 ">
            <section className="border bg-white p-4 rounded-md">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="board_games_query">{QUERY_TITLES.board_games}</Label>
                    <Input readOnly value={query.board_games} id="board_game_query" aria-label="What are you looking for?" placeholder="Board games you want" onFocus={(e) => (onSearch(e, QUERY_TITLES.board_games, "Board games you want"))} />
                    <CategorySelect query={query} onSelect={(e) => onSelectCategory(e)}></CategorySelect>
                </div>
            </section>
            <section className="border bg-white p-4 rounded-md">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="owned_board_games_query">{QUERY_TITLES.owned_board_games}</Label>
                    <Input readOnly value={query.owned_board_games} id="owned_board_game_query" placeholder="Board games you have" onFocus={(e) => (onSearch(e, QUERY_TITLES.owned_board_games, "Board games you have"))} />
                </div>
            </section>
            <section className="border bg-white p-4 rounded-md">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="location">{QUERY_TITLES.location}</Label>
                    <Input readOnly value={query.location} id="location" placeholder="Postal Code or City" onFocus={(e) => (onSearch(e, QUERY_TITLES.location, "Postal Code or City"))} />
                </div>
            </section>
        </div>
    );
}

function SearchInput({ givenValue, onSave, placeholder, suggestionsMutation }) {
    const [showSuggestionsList, setShowSuggestionsList] = useState(false);
    const [inputValue, setInputValue] = useState([givenValue]);
    useEffect(() => {
        setInputValue(givenValue);
    }, [givenValue])
    const inputElementRef = useRef();
    const componentRef = useRef();

    function save(value) {
        setShowSuggestionsList(false);
        setInputValue(value);
        onSave(value);
    }

    function handleSelect(value) {
        save(value);
    }

    function fetchSuggestions(e) {
        setShowSuggestionsList(true);
        suggestionsMutation.trigger(e.target.value);
    }

    function handleKeyUp(e) {
        if (e.key === 'Enter') {
            save(e.target.value);
            return;
        }

        const fetch = debounce(() => {
            fetchSuggestions(e)
        }, 500);

        fetch();
    }

    function handleFocus(e) {
        if (e.target.value !== '') {
            fetchSuggestions(e);
        }
    }

    return (<div ref={componentRef}>
        <Input
            ref={inputElementRef}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={handleKeyUp}
            onFocus={handleFocus}
            autoComplete="off"
            onBlur={(e) => {
                if (!componentRef.current.contains(e.relatedTarget)) {
                    save(e.target.value);
                }
            }}
        />
        {showSuggestionsList ? <SuggestionsList
            className="border border-t-0 rounded-b-md text-sm absolute w-full bg-white z-[20]"
            data={suggestionsMutation.data}
            onSelect={(item) => handleSelect(item)} /> : null}
    </div>)
}

function SearchQueryFormDesktop({ query, onSave, onSelectCategory }) {
    return (
        <div className="grid grid-cols-2 w-full gap-4">
            <section className="border bg-white p-4 rounded-md row-span-2">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="board_games_query">{QUERY_TITLES.board_games}</Label>
                    <div className="w-full relative">
                        <SearchInput
                            placeholder="Board games you want"
                            givenValue={query.board_games}
                            onSave={(value) => onSave(QUERY_TITLES.board_games, value)}
                            // TODO: change endpoint
                            suggestionsMutation={useSuggestionsMutation('/board-games')} />
                    </div>
                    <CategorySelect query={query} onSelect={(e) => onSelectCategory(e)}></CategorySelect>
                </div>
            </section>
            <div className="grid grid-rows-2 gap-4 w-full">
                <section className="border bg-white p-4 rounded-md h-fit">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="owned_board_games_query">{QUERY_TITLES.owned_board_games}</Label>
                        <div className="w-full relative">
                            <SearchInput
                                placeholder="Board games you own"
                                givenValue={query.owned_board_games}
                                onSave={(value) => onSave(QUERY_TITLES.owned_board_games, value)}
                                // TODO: change endpoint
                                suggestionsMutation={useSuggestionsMutation('/board-games')} />
                        </div>
                    </div>
                </section>
                <section className="border bg-white p-4 rounded-md h-fit">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="location">{QUERY_TITLES.location}</Label>
                        <div className="w-full relative">
                            <SearchInput
                                placeholder="Postal Code or City"
                                givenValue={query.location}
                                onSave={(value) => onSave(QUERY_TITLES.location, value)}
                                // TODO: change endpoint
                                suggestionsMutation={useSuggestionsMutation('/location-suggestions')} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

const Footer = ({ onClear, onSearch }) => (
    <CardFooter className="flex-none flex justify-between border-t-2 pt-6">
        <Button variant="ghost" className="underline" onClick={onClear}>Clear all options</Button>
        <Button onClick={onSearch}>Search</Button>
    </CardFooter>
)

// This is the search component.
// the onSearch event is given the query.
function BGEAdvancedSearchComponent({ onSearch }) {
    interface suggestionsPageInterface {
        title: string,
        placeholder: string,
        display: boolean
    }

    const initialSuggestionsPage: suggestionsPageInterface = {
        title: 'WHat',
        placeholder: 'What',
        display: false
    };

    const initialQuery = {
        board_games: '',
        board_game_genre: '',
        owned_board_games: '',
        location: ''
    };

    const [suggestionsPage, setSuggestionsPage] = useState(initialSuggestionsPage);
    const [query, setQuery] = useState(initialQuery);

    // for debugging query :)
    useEffect(() => {
        console.log(query);
    }, [query]);

    function showSuggestionsPage(e: Event, title: string, placeholder: string) {
        setSuggestionsPage({
            title: title,
            placeholder: placeholder,
            display: true
        });
    }

    function hideSuggestionsPage() {
        setSuggestionsPage(initialSuggestionsPage);
    }

    // hide the suggestion page, grab the value, and put it in the query
    function setSuggestion(suggestionType, suggestion) {
        hideSuggestionsPage();
        const newQuery = structuredClone(query);
        switch (suggestionType) {
            case QUERY_TITLES.board_games:
                newQuery.board_games = suggestion;
                break;

            case QUERY_TITLES.owned_board_games:
                newQuery.owned_board_games = suggestion;
                break;

            case QUERY_TITLES.location:
                newQuery.location = suggestion;
                break;

            default:
                break;
        }
        setQuery(query => ({
            ...newQuery
        }));
    }

    function setGenre(genre) {
        const newQuery = structuredClone(query);
        newQuery.board_game_genre = genre;
        setQuery(query => ({
            ...newQuery
        }));
    }

    function clearQuery() {
        setQuery(query => ({
            ...initialQuery
        }));
    }

    return (
        <main>
            <Card className="flex flex-col justify-between h-[calc(100dvh)] bg-gray-100 w-full rounded-none md:h-fit z-10">
                <CardHeader className="flex-none">
                    <section className="flex justify-between">
                        <div>
                            <CardTitle className="text-xl">Listings Search</CardTitle>
                            <CardDescription>Look for board games.</CardDescription>
                        </div>
                        <div>
                            {suggestionsPage.display ? <Button variant="ghost" onClick={hideSuggestionsPage}>go back</Button> : <Button variant="ghost">close</Button>}
                        </div>
                    </section>
                </CardHeader>
                <CardContent className="h-full overflow-y-auto md:overflow-y-visible">
                    <div className="block md:hidden h-full">
                        {suggestionsPage.display ?
                            <SuggestionsDisplay
                                title={suggestionsPage.title}
                                givenSuggestion={query[Object.keys(QUERY_TITLES).find(key => QUERY_TITLES[key] === suggestionsPage.title)]}
                                placeholder={suggestionsPage.placeholder}
                                onExit={(value) => setSuggestion(suggestionsPage.title, value)} />
                            : <SearchQueryForm
                                query={query}
                                onSearch={(e: Event, title: string, placeholder: string) => showSuggestionsPage(e, title, placeholder)}
                                onSelectCategory={setGenre} />
                        }
                    </div>
                    <div className="hidden md:block z-30">
                        <SearchQueryFormDesktop
                            query={query}
                            onSave={(field, value) => setSuggestion(field, value)}
                            onSelectCategory={setGenre} />
                    </div>
                </CardContent>
                <div className="block md:hidden z-10 relative">
                    {!suggestionsPage.display ? <Footer onClear={clearQuery} onSearch={() => { onSearch(query) }} /> : null}
                </div>
                <div className="hidden md:block z-10 relative">
                    <Footer onClear={clearQuery} onSearch={() => { onSearch(query) }} />
                </div>
            </Card>
        </main>
    );
}

export function SearchInputWithIcon() {
    return (
        <div className="flex flex-row items-center ">
            <div className="bg-gray-300 w-10 h-10 rounded-sm flex justify-center items-center">
                <SearchIcon />
            </div>
            <Input className="w-full" placeholder="Search inbox" />
        </div>
    )
}

export { BGEAdvancedSearchComponent };

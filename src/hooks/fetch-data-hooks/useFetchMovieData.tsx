import { useContext, useEffect, useState } from "react";
import { specificIdContext } from "../../contexts/SpecificIdContext";
import { mediaContext } from "../../contexts/MediaContext";
import type { IFetchedMovieType } from "../../types/items";




const IMDB_API_KEY = import.meta.env.VITE_API_READ_ACCESS_TOKEN
export default function useFetchMovieData(): IFetchedMovieType | null {
    const [movieData, setMovieData] = useState<IFetchedMovieType | null>(null);
    const { id } = useContext(specificIdContext);
    const { headerItem } = useContext(mediaContext);


    useEffect(() => {
        const fetchMovieData = async () => {
            try {

                const rawData = await fetch(`https://api.themoviedb.org/3/${headerItem}/${id}?append_to_response=videos`, {
                    headers: {
                        'Authorization': `Bearer ${IMDB_API_KEY}`
                    }
                }
                )
                const data: IFetchedMovieType | null = await rawData.json();
                setMovieData(data);
            } catch (e) {
                console.error(Error, e);
            }
        }
        fetchMovieData();
    }, [setMovieData, id, headerItem])

    console.log(movieData)
    return movieData
}
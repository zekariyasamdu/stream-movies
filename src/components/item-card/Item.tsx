import { Link } from "react-router-dom";
import Rating from "./Rating";
import Thumbnail from "./Thumbnail";
import { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext";
import { useContext } from "react";

export interface ItemContainerProp {
    id: string,
    src: string;
    rating: number;
    title: string;
}

export default function Item({ src, rating, title, id }: ItemContainerProp) {
    const { headerItem } = useContext(trendingHeaderFocusContext);

    return (
        <Link to={`/${headerItem}/${id}`} className="group w-[243px] h-[363px] relative m-3 flex-center text-center hover:cursor-pointer border-3 border-b-L-secondary hover:border-blue-400 ">
            <Thumbnail src={src} alt={title} className="group-hover:opacity-50" />
            <Rating rating={rating} className="opacity-0 group-hover:opacity-100 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-7xl text-L-primary"
            />
        </Link>
    )
}



import {useEffect} from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - GameBuy`;
    }, [title]);

    return null;
}

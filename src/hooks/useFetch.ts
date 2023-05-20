import { useEffect, useState } from "react";

function useFetch(URL:string){
    const [data, setData] = useState<project[] | challenge []>();
    useEffect(() => {
        (
            async function(){
                try {
                    const res = await fetch(URL);
                    const json = await res.json();
                    setData(json);
                } catch (error) {
                    setData([]);
                }
            }
        )();
    }, [URL]);
    return [ data ];
}

export { useFetch };
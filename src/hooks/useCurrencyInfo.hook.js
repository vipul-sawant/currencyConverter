import { useEffect, useState } from "react";
import { currency_url } from "../constants";

function useCurrencyInfo(currency){

    const [data, setData] = useState({});
    console.log("data initial :",data);
    console.log("currency :",currency);

    useEffect(()=>{

        fetch(`${currency_url}${currency}.json`)
        .then(res=> res.json())
        .then(res=> setData(res[currency]));

        console.log("data after useEffect :", data);

    }, [currency]);

    return data;
}

export default useCurrencyInfo;
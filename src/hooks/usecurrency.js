
// import { useState, useEffect } from "react"


//  function Usecurrencyinfo(currency)
// {
//        const {data, setdata}= useState({})
//     useEffect(async ()=>{
//         try{

//             let x=  await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
//             console.log(x)
//             let res=  await x.json();
//             console.log(res)
//             setdata(res[currency])
//             console.log(data)
//         }
//         catch(e)
//         {
//             console.log('this is the error', e)
//         }
//     },[currency])
//     return data
// }

// export default Usecurrencyinfo
import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))

        
        console.log(data);
        console.log('this is the data',data);
    }, [currency])
    return data
}

export default useCurrencyInfo;

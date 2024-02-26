import React from "react";
import { useState, useEffect } from "react"


 function Usecurrencyinfo({currency})
{
       const {data, setdata}= useState([])
    useEffect(async ()=>{

      let x=  await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
      console.log(x)
      let res=  await x.json();
      console.log(res)
      setdata(res[currency])
      console.log(data)
    },[currency])
    return data
}

export default Usecurrencyinfo
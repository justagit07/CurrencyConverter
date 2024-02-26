import React from "react";

function Inputbox(
    {

        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions=[],
        selectCurrency='eur',
        className='',
        amoutDissable=false,
        currencyDissable=false, 
    }
) 
{
       return (
        <>
        <div className="flex text-slate-800 gap-9  justify-between">

            <div className=" w-1/2  text-xl">
                <label className="inline-block  mb-2">{label}</label>

                  <input type="Number"  disabled={amoutDissable} value={amount} onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} className=" rounded-lg  mt-[20px] px-4 py-4 h-[5vh]"/> 
            </div>
            <div className=" w-1/2  flex text-black flex-wrap justify-end text-right">
                      <p className="w-full  text-2xl "> currency Type </p>
                <select   value={selectCurrency} defaultValue={"inr"} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} className="w-[100px] h-9  text-black rounded-lg px-1 py-1 text-slate-900 cursor-pointer outline-none" >
            

            {currencyOptions.map((e)=>
            {
               return  <option key={e}  className="text-black" value={e}>
                {e}
                </option>
            })}
    
                </select>
            </div>
        </div>
        </>
       )
}

export default Inputbox
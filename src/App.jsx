import { useState } from 'react'
import Inputbox from './inputbox'
import useCurrencyInfo from './hooks/usecurrency'


function App() {
     const[amount, setamount]= useState(0)
     const [from, setfrom]=useState("eur")
     const [to, setto]=useState("inr")
     const [convertAmount, setconvertedAmount]=useState(0)



     const currencyInfo= useCurrencyInfo(from)
     console.log('this is the ', currencyInfo)

     const options= Object.keys(currencyInfo)
     console.log('this is the options', options)

     const swap= ()=>
     {
          setfrom(to)
          setto(from) 
            setconvertedAmount(amount)
            setamount(convertAmount )
     }
      const convert =()=>
      {
        setconvertedAmount(amount* currencyInfo[to])

      }
      const username= "url('https://images.pexels.com/photos/534229/pexels-photo-534229.jpeg?auto=compress&cs=tinysrgb&w=800')"


  return (
  <>

     <div className = {`w-full flex     justify-center flex-wrap h-screen bg-cover bg-no-repeat text-white  bg-black`} style={{backgroundImage: username}}  >

              
              <div className='bg-red  flex  p-10  rounded-xl mt-[150px] w-[40vw] h-[200px]'  >
                 

              <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >

                <Inputbox label='from'  onAmountChange={(amount) => setamount(amount)} amount={amount} currencyOptions={options} onCurrencyChange={(currency)=> {setamount(amount); setfrom(currency)}}  selectCurrency={from}/> 
                

                        <div className=' relative   w-full h-[100px] '>
                           <button className="absolute  left-1/2 top-1/2 rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>swap</button>
                           
                           </div>

             <div className='bg-red  flex  p-10  rounded-xl  w-[40vw] h-[200px]'  >
             <Inputbox label='to' amount={convertAmount} currencyOptions={options} onCurrencyChange={(currency)=> setto(currency)} selectCurrency={to} /> 

             </div>
              <button type='submit' className='bg-blue-700 ml-[200px] rounded-md w-[200px] h-12' onClick={convert}> Convert {from} to {to}</button>

            </form>
      </div>          
   </div >
    </>
  )
}

export default App

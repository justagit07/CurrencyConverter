import { useState } from 'react'
import Inputbox from './inputbox'
import Usecurrencyinfo from './hooks/usecurrency'


function App() {
  const [count, setCount] = useState(0)
  const username='neeraj'
  const backgroundImage=" url('https://images.pexels.com/photos/919606/pexels-photo-919606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2', selected:true },
    { value: 'option3', label: 'Option 3' },
  ];

  const x='usa'


  return (<>

     <div className = {`w-full flex justify-center flex-wrap h-screen items-center  bg-cover bg-no-repeat text-white border-red border-2 bg-black border-solid`}  >


              <div className='bg-red  flex  p-10 border-4 rounded-xl m-4 border-rose-900  w-[70vw] h-[200px]' >
                <Inputbox className='h-[3vh]'/> amount you want to change


                 <div>
                 <select className="form-select form-select-bordered form-select-lg ">
  {options.map((option, index) => (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ))}
</select>
                 </div>
             </div >

                        <div className=' relative border-2  border-orange-200 w-full h-[100px] '>
                           <button className="absolute  left-1/2 top-1/2  border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">swap</button>
                           
                           </div>

             <div className='bg-red  p-10 flex border-4 rounded-xl m-10 border-rose-900  w-[40vw] h-[200px]'>
             <Inputbox/>  your amount is 



             <div>
                 <select className="form-select form-select-bordered form-select-lg " defaultValue={options.find(option => option.selected).value}>
  {options.map((option, index) => (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ))}
</select>
                 </div>
             </div>


      </div>

    </>
  )
}

export default App

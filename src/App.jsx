import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Details from './Details'
function App() {
  const [details, setDetails] = useState()
  const [pincode, setPincode] = useState('')
  const handleInput = (e) => {
    const result = e.target.value
    setPincode(result)
  }

  async function handleSubmit (e) {
    e.preventDefault();
    console.log(pincode);
    try {
      const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
      console.log(response.data);
      setDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className='flex flex-col items-center justify-between'>
        <form onSubmit={handleSubmit} action="" className='flex justify-center items-center gap-2 mt-20'>
          <input onChange={handleInput} className='h-9 p-2 m-2 rounded-md border-2 border-slate-500'
          type="text" name="" id="" placeholder='Enter your pincode' />
          <button className=' font-semibold shadow outline-none rounded-md  border-2 border-slate-500 bg-blue-300 p-1 m-1 w-20'>Submit</button>
        </form>
       <Details result = {details}/>
      </div>
    </>
  )
}

export default App
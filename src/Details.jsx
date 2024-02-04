import React from 'react'

const Details = ({result}) => {
  return (
    <div>
         <div className='border-2 flex gap-2 pb-8 px-3 justify-left items-center flex-wrap border-slate-500 w-80 h-24 rounded-md ml-106 mt-2 bg-blue-300'>
            <h1>Name :  </h1>
            <h1>District :  </h1>
            <h1>Circle : </h1>
            <h1>State : </h1>
            <h1>Region : </h1>
            <h1>Pincode :  </h1>

        </div>
    </div>
  )
}

export default Details
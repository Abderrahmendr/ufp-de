import React from 'react'

function adapter() {
  return (
    <div className='flex justify-center items-center mt-16 mb-10 '>
<a href="#" className="group relative block overflow-hidden ">
  
  <img
  src="/link.jpg"
     alt=""
    className="h-64 w-full  object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div className="relative border border-gray-100 shadow-xl shadow-teal-800  p-6">
    <span className="whitespace-nowrap bg-teal-800 px-3 py-1.5 text-sm font-bold"> Neu </span>

    <h3 className="mt-4 text-lg font-medium text-gray-900">Adapter</h3>

    <p className="mt-1.5 text-sm text-gray-700">D-LINK <br/>  4 PORT <br/> USB 2.0 <br/> </p>

    
  </div>
</a> 
    </div>
 )
}

export default adapter
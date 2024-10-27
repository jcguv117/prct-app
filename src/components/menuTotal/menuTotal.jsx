import React from 'react'

const MenuTotal = ({total, cantidad, reset, add, detail}) => {
  return (
    <div className='bg-indigo-600 text-black p-4 w-full lg:w-1/4 fixed bottom-0 right-0'>  
      <div className='grid grid-rows-2'>
        <div className='grid grid-rows-2'>
          <span className='text-left text-xl'>#bebidas: {cantidad}</span>
          <span className='text-left text-3xl'>Total: ${total}</span>
        </div>
        <div className='mt-1 text-right'>
          <button className='bg-sky-700 text-white' onClick={()=>detail()}>Detalle</button>
          <button className='bg-sky-700 text-white' onClick={()=>reset()}>Cancelar</button>
          <button className='bg-sky-700 text-white' onClick={()=>add()}>Confirmar</button>
        </div>
      </div>    
    </div>
  )
}

export default MenuTotal
import React from 'react'

const CardDrink = ({list, addItem}) => {
  return (
    <>
        {list.map(item => (
            <div className='lg:w-1/4 p-4 min-w-72'>
                <button 
                    onClick={()=>addItem(item)}
                    class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className='max-h-40 w-full'>
                        <img class="h-40 w-full rounded-sm" src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-meb-style-lemon-juice-lemon-slices-fruit-juice-creative-png-image_3814511.jpg" alt="product image" />
                    </div>
                    <div class="px-1 pb-5">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.label}</h5>
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white">${item.total}</span>
                        </div>
                    </div>
                </button>
            </div>
        ))}
    </>
  )
}

export default CardDrink
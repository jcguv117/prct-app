import { useState } from 'preact/hooks'
import React from 'react'

const MenuItems = ({listItems, handleClick, addItem}) => {

const [list, setList] = useState(listItems)

  return (
    <div className="p-4 max-w-md mx-auto min-w-96">
      {list.map((item) => (
        <div key={item.id} className="mb-4 shadow-sm border-2 border-purple-600 rounded-md">
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold text-purple-700">{item.label}</h2>
                <p className="text-sm text-gray-500">
                  {/* {order.products} bebida{order.products !== 1 ? 's' : ''} */}
                </p>
                <p className="text-xl font-bold mt-2">${item.total.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <img src={item.image} alt="" className="w-10 h-10 rounded-full ml-auto border-b-2 border-indigo-800" />
              </div>
              <div>
                <button onClick={()=>addItem(item)}>+</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuItems
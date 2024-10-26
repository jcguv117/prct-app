import React from 'react'
// import { Card, CardContent } from "@/components/ui/card"
// import { Card, CardContent } from '@shadcn/ui';

const CardContainer = ({orders}) => {

  return (
    <div className="p-4 max-w-md mx-auto">
      {orders.map((order, index) => (
        <div key={index} className="mb-4 shadow-sm border-2 border-purple-600 rounded-md">
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold text-purple-700">Orden: #{index+1}</h2>
                <p className="text-sm text-gray-500">
                  {order.products} bebida{order.products !== 1 ? 's' : ''}
                </p>
                <p className="text-xl font-bold mt-2">${order.total.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 ml-2 mb-2">{order.date}</p>
                <img src={order.image} alt="" className="w-10 h-10 rounded-full ml-auto border-b-2 border-indigo-800" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardContainer
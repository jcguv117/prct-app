import React from 'react'
import { useOrderStore } from '../../stores/order.store';


export const OrderPage = () => {

  const { orders, total, removeOrder, cancelOrder, editOrder, successOrder } = useOrderStore();
  console.log(orders)
  return (
    <div className='text-white'>
      <div className="p-4 max-w-md h-full mx-auto">
      {
        orders && 
        orders.map((order, index) => (
          <div className="mb-4 shadow-sm border-2 border-purple-600 rounded-md">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-purple-700">Orden: #{index+1}</h2>
                  <p className="text-sm text-gray-500">
                    {order?.orders.length} bebida{order?.orders.length !== 1 ? 's' : ''}
                  </p>
                  <p className="text-xl font-bold mt-2">${order?.total.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 ml-2 mb-2">{order?.date.toString()}</p>
                  <p>{order?.status}</p>
                  {/* <img src={order?.image} alt="" className="w-10 h-10 rounded-full ml-auto border-b-2 border-indigo-800" /> */}
                </div>
              </div>
            </div>
            <div className="p-2 flex justify-between">
              <button id="btn-detail" className="bg-transparent border-2 border-slate-400">Ver</button>
              <button id="btn-delete" className="bg-transparent border-2 border-red-400" onClick={() => cancelOrder(order.id)}>Cancelar</button>
              <button id="btn-update" className="bg-transparent border-2 border-blue-400"onClick={() => editOrder(order.id)}>Editar</button>
              <button id="btn-success" className="bg-transparent border-2 border-green-400" onClick={() => successOrder(order.id)}>Terminar</button>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

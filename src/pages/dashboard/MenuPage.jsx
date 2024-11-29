import React from 'react'
import { useState } from 'preact/hooks';
import { listItems } from '../../helpers/MenuItems';
import CardDrink from '../../components/cardContainer/cardDrink';
import { useOrderStore } from '../../stores/order.store';
import { IoTrashSharp, IoRemoveCircleSharp, IoNewspaperSharp, IoBanSharp, IoCheckmarkCircle   } from "react-icons/io5";
import { MenuCard } from '../../components/shared/card/MenuCard';

export const MenuPage = () => {

  const { addOrder, removeOrder, standByOrder, standBy, cleanStandByOrder } = useOrderStore();
  
  const [orders, setOrders] = useState(standBy.orders?.length ? standBy.orders : [])

  const [orderList, setOrderList] = useState([])

  const [suma, setSuma] = useState(standBy.total ? standBy.total : 0);

  const addItemToOrder = (item) => {
    const ordenes = [...orders, item];
    setOrders(ordenes);
    let sum = ordenes.reduce((acc, item) => acc + item.total, 0);
    setSuma(sum);
    standByOrder({total:sum, orders: ordenes});
  }

  const resetOrder = () => {
    setOrders([]);
    setSuma(0);
    cleanStandByOrder();
  }

  const addNewOrder = () => {
    if(orders.length) {
      const order = {
        total: suma,
        orders: orders,
      }
      const newOrder = [...orderList, order]
      setOrderList(newOrder)
      console.log("🚀 ~ addNewOrder ~ newOrder:", newOrder)
      addOrder(order);
    }
    resetOrder();
  }

  const detailOrder = () => {
    console.log(orders)
  }
  
  return (
    <>
      <div className="w-full grid" style={{gridTemplateColumns: '70% 30%'}}>
        <div className='flex flex-wrap justify-center'>
          {/* <CardDrink list={listItems} addItem={addItemToOrder} /> */}
          <MenuCard menuItems={listItems} />
        </div>
        <div className=''>
          { 
            suma > 0 && 
            <MenuTotalV2 
              total={suma} 
              cantidad={orders.length} 
              reset={resetOrder} 
              add={addNewOrder} 
              detail={detailOrder} 
              orders={orders}/>
          }
        </div>
      </div>        
    </>
  )
}

const MenuTotal = ({total, cantidad, reset, add, detail}) => {
  return (
    <div className='bg-indigo-600 text-black p-4 w-full rounded-tl-3xl lg:w-1/4 fixed bottom-0 right-0'>  
      <div className='grid grid-rows-2 text-white font-semibold'>
        <div className='grid grid-rows-2'>
          <span className='text-left text-xl'>#productos: {cantidad}</span>
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

const MenuTotalV2 = ({total, cantidad, reset, add, detail , orders}) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md h-fit'>  
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-x-2">
          <IoNewspaperSharp />
           Nueva Orden
        </h2>
        <div>
          <MenuTotalItems orders={orders} />
        </div>
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-end mb-4 font-semibold">
            <span className="">Total:</span>
            <span className="text-3xl">${total}</span>
          </div>
          <div className='flex flex-col gap-2'>
            <button onClick={()=>add()} className="bg-green-600 text-white place-content-center py-3 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2">
               Confirmar <IoCheckmarkCircle className='text-2xl' />
            </button>
            <button className='bg-gray-600 hover:bg-gray-700 text-white place-content-center flex items-center gap-2' onClick={()=>reset()}>
              Cancelar <IoBanSharp className='text-2xl' />
            </button>
          </div>
          {/* <button className='bg-sky-700 text-white' onClick={()=>detail()}>Detalle</button> */}
        </div>
    </div>
  )
}

const MenuTotalItems = ({orders}) => {
  const { removeOrder} = useOrderStore();
  return (
    <div className="space-y-4 mb-6">
      {
        orders && 
        orders.map((item, index) => (
        <div
          key={item.id + index}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
        >
          {/* <div className="flex items-center space-x-4">
            <img
              src={`https://${item.image}`}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1560393464-5c69a73c5770";
              }}
            />
            </div> */}
          <div>
            <h3 className="font-medium">{item.label}</h3>
              <p className="text-gray-600">
                ${(item.total).toFixed(2)}
              </p>
          </div>
          <div className="flex items-center space-x-2">
            <span>{ 0 }</span>
            <button
              onClick={() => removeOrder(item.id)}
              className="p-1 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400"
            >
              <IoRemoveCircleSharp className='text-2xl' />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

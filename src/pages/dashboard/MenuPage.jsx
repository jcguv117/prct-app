import React from 'react'
import { useState } from 'preact/hooks';
import { listItems } from '../../helpers/MenuItems';
import CardDrink from '../../components/cardContainer/cardDrink';
import { useOrderStore } from '../../stores/order.store';

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
      <div className="w-full">
        <div className='flex flex-wrap justify-center'>
          <CardDrink list={listItems} addItem={addItemToOrder} />
        </div>
        <div>
          { 
            suma > 0 && 
            <MenuTotal total={suma} cantidad={orders.length} reset={resetOrder} add={addNewOrder} detail={detailOrder} />
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

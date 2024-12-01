import React from 'react'
import { useState } from 'preact/hooks';
import { listItems } from '../../helpers/MenuItems';
import CardDrink from '../../components/cardContainer/cardDrink';
import { useOrderStore } from '../../stores/order.store';
import { IoTrashSharp, IoRemoveCircleSharp, IoNewspaperSharp, IoBanSharp, IoCheckmarkCircle, IoFastFood, IoBeer   } from "react-icons/io5";
import { MenuCard } from '../../components/shared/card/MenuCard';
import { FiSearch } from 'react-icons/fi';

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
        <div className='flex flex-col flex-wrap justify-center'>
          {/* <CardDrink list={listItems} addItem={addItemToOrder} /> */}
          {/* filters */}
          <div className='flex flex-row justify-between'>
              <div>
                  <div class="relative w-80">
                    <input
                      value=""
                      placeholder="Search now..."
                      class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                      id="floating_outlined"
                      type="text"
                    />
                    <label
                      class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white data-[disabled]:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      for="floating_outlined"
                    >
                      <span class="font-bold">Search a thing...</span>
                    </label>
                    <div class="absolute top-3 right-3">
                      <FiSearch className='size-6 stroke-gray-500' />
                    </div>
                  </div>
              </div>
              <div>
              <div class="flex gap-2 p-2">
  <div>
    <input
      class="peer sr-only"
      value="male"
      name="gender"
      id="male"
      type="radio"
    />
    <div
      class="flex h-16 w-24 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-gray-50 p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400"
    >
      <label
        class="flex cursor-pointer items-center justify-center text-sm uppercase text-gray-500 peer-checked:text-blue-500"
        for="male"
      >
        <IoBeer />
        Bebidas
      </label>
    </div>
  </div>
  <div>
    <input
      class="peer sr-only"
      value="female"
      name="gender"
      id="female"
      type="radio"
    />
    <div
      class="flex h-16 w-24 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-gray-50 p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400"
    >
      <label
        class="flex cursor-pointer items-center justify-center text-sm uppercase text-gray-500 peer-checked:text-blue-500"
        for="female"
      >
        <IoFastFood />
        Comida
      </label>
    </div>
  </div>
</div>
              </div>
              <div>
              <select
                  className="bg-white px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ordenar..."
                  value={''}
                  // onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="popularity">Sort by Popularity</option>
                </select>
              </div>
          </div>
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

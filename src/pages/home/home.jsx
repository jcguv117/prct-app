import React from 'react'
import CardContainer from '../../components/cardContainer/cardContainer'
import { useState } from 'preact/hooks';
import MenuItems from '../../components/menuItems/menuItems';
import { listItems } from '../../helpers/MenuItems';
import CardDrink from '../../components/cardContainer/cardDrink';
import MenuTotal from '../../components/menuTotal/menuTotal';
import CardOrders from '../../components/cardContainer/cardOrders';

const Home = () => {
  
  const [orders, setOrders] = useState([
    // { id: 1, date: "31-10-2023", products: 2, total: 100.00, image: "/placeholder.svg?height=40&width=40" },
    // { id: 2, date: "31-10-2023", products: 5, total: 200.00, image: "/placeholder.svg?height=40&width=40" },
    // { id: 3, date: "27-10-2023", products: 1, total: 50.00, image: "/placeholder.svg?height=40&width=40" },
    // { id: 4, date: "23-10-2023", products: 3, total: 20.00, image: "https://png.pngtree.com/png-clipart/20190614/original/pngtree-meb-style-lemon-juice-lemon-slices-fruit-juice-creative-png-image_3814511.jpg" },
  ])

  const [orderList, setOrderList] = useState([])

  const [suma, setSuma] = useState(0);

  const sumItems = () => {
    
  }

  const addItemToOrder = (item) => {
    const ordenes = [...orders, item];
    setOrders(ordenes);
    let sum = ordenes.reduce((acc, item) => acc + item.total, 0);
    console.log("🚀 ~ addItemToOrder ~ ordenes:", ordenes)
    setSuma(sum);
  }

  const resetOrder = () => {
    setOrders([]);
    setSuma(0);
  }

  const addNewOrder = () => {
    if(orders.length) {
      const order = {
        date: '2024-10-10',
        total: suma,
        orders: orders
      }
      const newOrder = [...orderList, order]
      setOrderList(newOrder)
      console.log("🚀 ~ addNewOrder ~ newOrder:", newOrder)
    }
    resetOrder();
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
            <MenuTotal total={suma} cantidad={orders.length} reset={resetOrder} add={addNewOrder} />
          }
        </div>
        {/* <div>
          Menu
          <MenuItems
            listItems={listItems}
            // handleClick={(e) => handleClick(e)}
            addItem={addItemToOrder} />
        </div> */}
        {/* <div> 
          Ordenes
          <CardContainer
            orders={orders} />
        </div> */}
        {/* <div> 
          Ordenes
          <CardOrders
            orderList={orderList} />
        </div> */}
      </div>
    </>
  )
}

export default Home
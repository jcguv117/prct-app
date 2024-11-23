import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

//* status: 'open' | 'success' | 'cancel';

export const useOrderStore = create()(
  persist(
    (set, get) => ({
      total: 10,
      orders: [],
      standBy: {
        total: 0,
        orders: [],
      },

      totalSales: () => {
        const orders = get().orders;
        return orders.reduce((sum, order) => {
          if (order.status === 'success') {
            return sum + order.total;
          }
          return sum;
        }, 0);
      },

      // Función para agregar una orden
      addOrder: (order) => {
        const date = new Date();
        order.id      = uuidv4();
        order.date    = date.toLocaleString(),
        order.status  = 'open';
        set(state => ({
          orders: [...state.orders, order]
        }))
      },

      removeOrder: (orderId) => set(state => ({
        orders: state.orders.filter(order => order.id !== orderId)
      })),

      cancelOrder: (orderId) => set(state => ({
        orders: state.orders.map(order => 
          order.id === orderId ? { ...order, status: 'cancel' } : order
        )
      })),

      successOrder: (orderId) => set(state => ({
        orders: state.orders.map(order => 
          order.id === orderId ? { ...order, status: 'success' } : order
        )
      })),

      editOrder: (props) => {
        window.location.href = '/menu';
        const {total, orders, id} = props;
        set(state => ({
          standBy: {...state.standBy, total, orders, id}
        }))
      },

      standByOrder: (props) => {
        const {total, orders} = props;
        set(state => ({
          standBy: {...state.standBy, total, orders}
        }))
      },

      cleanStandByOrder: () => {
        set(() => ({
          standBy: { total: 0, orders: [] }
        }))
      },

      updateOrder: (updatedOrder) => set(state => ({
        orders: state.orders.map(order => 
          order.id === updatedOrder.id ? updatedOrder : order
        )
      }))

      

    }),
    {
      name: 'orders-store'
    }
  )
);

import { useOrderStore } from "../../stores/order.store"

export const HomePage = () => {
    const { totalSales } = useOrderStore();


  return (
    <div className="text-white">
        <div className="text-2xl w-48 h-20">
            <span>Total: ${totalSales()?.toFixed(2) || 0.00} </span>
        </div>
    </div>
  )
}

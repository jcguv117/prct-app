import { StatCard } from "../../components/shared/card/StatCard";
import { StatCardV2 } from "../../components/shared/card/StatCardV2";
import { useOrderStore } from "../../stores/order.store"
import { IoLogoUsd, IoReceipt } from "react-icons/io5";

export const HomePage = () => {
    const { totalSales } = useOrderStore();


  return (
    <div className="text-white">
        <div className="flex flex-row justify-center text-2xl gap-4">
            <StatCardV2
              title={'Total de Ventas para Corte'}
              stat={`$${totalSales()?.toFixed(2) || 0.00}`}
              Icon={IoLogoUsd}
              twClassIcon={'fill-green-600'}
              />
            <StatCardV2
              title={'Cuentas abiertas'}
              stat={`10`}
              Icon={IoReceipt}
              twClassIcon={'fill-gray-600'}
              />
            <StatCardV2
              title={'Total de cuentas abiertas'}
              stat={`$${totalSales()?.toFixed(2) || 0.00}`}
              Icon={IoLogoUsd}
              twClassIcon={'fill-amber-600'}
              />
            {/* <StatCard
              title={'Ordenes Activas'}
              stat={`10`}
              Icon={IoLogoUsd}
              />
            <StatCard
              title={'Ordenes Activas'}
              stat={`10`}
              Icon={IoLogoUsd}
              /> */}
        </div>
    </div>
  )
}

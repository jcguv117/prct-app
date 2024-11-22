import { SideMenu } from '../components';
import { AppRouter } from '../router/AppRouter';

export const DashboardLayout = () => {
    return (
      <div className="bg-stole-200 overflow-y-scroll w-screen h-screen antialiased text-slate-900 selection:bg-blue-900 selection:text-white">
      <div className="flex flex-row relative w-screen">
        <SideMenu />
        <div className="w-full p-4">
          <AppRouter/>
        </div>

      </div>

    </div>
    )
  };
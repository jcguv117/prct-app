// import type { IconType } from 'react-icons';
// import { IoSpeedometerOutline, IoPawOutline, IoLogOutOutline, IoHeartOutline, IoListOutline, IoAccessibilityOutline } from 'react-icons/io5';
import { IoFileTrayFullSharp, IoHomeSharp, IoNewspaperSharp } from 'react-icons/io5';
import './SideMenu.css';
import { SideMenuItem } from './SideMenuItem';


const menuItems = [
  { title: 'Inicio', subTitle: 'Información general', href: '/home', Icon: IoHomeSharp },
  { title: 'Menus', subTitle: 'Alta de Ordenes', href: '/menu', Icon: IoNewspaperSharp },
  { title: 'Ordenes', subTitle: 'Control de Ordenes', href: '/ordenes', Icon: IoFileTrayFullSharp  },
];


export const SideMenu = () => {

  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-80 left-0 overflow-y-scroll">
      <div id="logo" className="my-4 px-6">
        {/* Title */}
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Zustand
          <span className="text-blue-500 text-xs"> app</span>
          .
        </h1>
        <p className="text-slate-500 text-sm">Manejador de estados simple pero poderoso.</p>
      </div>

      {/* Menu Items */ }
      <nav id="nav" className="w-full px-6">

        {
          menuItems.map( item =>(
            <SideMenuItem key={item.href} {...item} />
          ) )
        }


      </nav>
    </div>
  );
};
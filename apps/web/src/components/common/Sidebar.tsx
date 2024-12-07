'use client';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { headerGNBMenuData } from 'src/store/initialStore';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}
interface FishCategory {
  id: number;
  name: string;
  image: React.FC<{ size?: number }>;
  url: string;
}
export function Sidebar({ open, onClose }: SidebarProps) {
  const data = headerGNBMenuData;
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);
  return (
    <>
      <div
        className={`fixed inset-0 z-[1000] h-svh bg-black bg-opacity-50 ${open ? '' : 'hidden'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed inset-y-0 left-0 z-[1001] w-full h-svh transform overflow-hidden p-4 transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          animation: 'gradient-bg 3s infinite',
          background: 'linear-gradient(35deg, #F8D448, #F6D84C, #D4B007)',
          backgroundSize: '200% 100%',
        }}
      >
        <div className="flex items-center justify-between mb-4 p-4">
          <h2 className="text-2xl font-bold text-white">Menus</h2>
          <div onClick={onClose} className="z-[100]">
            <X color="white" size={'1.5rem'} />
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 z-50">
          {data.map((menu) => (
            <p key={menu.label} className="text-sm font-bold">
              {menu.label}
            </p>
          ))}
        </div>
      </aside>
    </>
  );
}

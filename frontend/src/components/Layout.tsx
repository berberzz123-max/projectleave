import { ReactNode } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  LogOut, 
  Menu,
  X,
  LayoutDashboard,
  CalendarDays,
  History,
  Users,
  FileCheck,
  Settings,
  PieChart
} from 'lucide-react';
import { useState } from 'react';

type LayoutProps = {
  children: ReactNode;
  role: 'user' | 'manager' | 'hr' | 'ceo';
};

export default function Layout({ children, role }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getMenuItems = () => {
    switch (role) {
      case 'user':
        return [
          { name: 'Dashboard', path: '/user', icon: LayoutDashboard },
          { name: 'Leave Request', path: '/user/request', icon: CalendarDays },
          { name: 'Leave History', path: '/user/history', icon: History },
        ];
      case 'manager':
        return [
          { name: 'Dashboard', path: '/manager', icon: LayoutDashboard },
          { name: 'Leave Requests', path: '/manager/requests', icon: FileCheck },
          { name: 'Employees', path: '/manager/employees', icon: Users },
        ];
      case 'hr':
        return [
          { name: 'Dashboard', path: '/hr', icon: LayoutDashboard },
          { name: 'Leave Management', path: '/hr/management', icon: CalendarDays },
          { name: 'Quotas', path: '/hr/quotas', icon: Settings },
          { name: 'Reports', path: '/hr/reports', icon: PieChart },
        ];
      case 'ceo':
        return [
          { name: 'Dashboard', path: '/ceo', icon: LayoutDashboard },
          { name: 'Company Reports', path: '/ceo/reports', icon: PieChart },
          { name: 'Approvals', path: '/ceo/approvals', icon: FileCheck },
        ];
    }
  };

  const menuItems = getMenuItems();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-20 lg:hidden backdrop-blur-sm" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-30
        w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        {/* Logo/Brand */}
        <div className="flex items-center justify-center h-16 border-b border-gray-200 px-6">
          <span className="text-xl font-bold text-indigo-600 tracking-tight">Leave System</span>
          <button 
            className="lg:hidden ml-auto text-gray-500"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* User Info */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
              {role.toUpperCase()[0]}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 capitalize">{role}</p>
              <p className="text-xs text-gray-500">Logged in</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                  ${isActive 
                    ? 'bg-indigo-50 text-indigo-700 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                <Icon size={20} className={isActive ? 'text-indigo-600' : 'text-gray-400'} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors duration-200"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
          >
            <Menu size={24} />
          </button>
          
          <div className="ml-auto flex items-center gap-4">
            {/* Notification placeholder or other top bar items */}
            <div className="text-sm text-gray-500 font-medium">
              {new Date().toLocaleDateString('th-TH', { 
                year: 'numeric', month: 'long', day: 'numeric' 
              })}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

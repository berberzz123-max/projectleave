import { CalendarDays, Clock, FileCheck } from 'lucide-react';

export default function UserDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm">Welcome back! Here is your leave overview.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-medium shadow-sm transition-colors duration-200 flex items-center gap-2 w-fit">
          <CalendarDays size={18} />
          New Leave Request
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Remaining Annual Leave */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <CalendarDays size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Annual Leave Balance</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">10 <span className="text-sm font-normal text-gray-500">Days</span></h3>
          </div>
        </div>

        {/* Pending Requests */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Pending Requests</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">1 <span className="text-sm font-normal text-gray-500">Request</span></h3>
          </div>
        </div>

        {/* Approved Leave */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-xl">
            <FileCheck size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Approved (This Year)</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">5 <span className="text-sm font-normal text-gray-500">Days</span></h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Recent Leave Requests</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {/* Item 1 */}
          <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div>
              <p className="font-medium text-gray-900">Sick Leave</p>
              <p className="text-sm text-gray-500">12 Oct 2026 - 13 Oct 2026</p>
            </div>
            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
              Approved
            </span>
          </div>
          
          {/* Item 2 */}
          <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div>
              <p className="font-medium text-gray-900">Annual Leave</p>
              <p className="text-sm text-gray-500">20 Dec 2026 - 25 Dec 2026</p>
            </div>
            <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full border border-amber-200">
              Pending
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

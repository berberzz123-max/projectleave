import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // จำลองการตรวจสอบรหัสผ่านตามที่กำหนด
    if (username === 'Admin' && password === 'Admin67') {
      // เมื่อเข้าระบบสำเร็จ ให้ไปที่หน้า Dashboard (เบื้องต้นให้ไปที่หน้า manager หรือ role ไหนก็ได้)
      navigate('/manager');
    } else {
      alert('Username หรือ Password ไม่ถูกต้อง');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-end pr-8 lg:pr-64 bg-[#3c3c3c] overflow-hidden font-sans">
      
      {/* Decorative Circles on the left */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-[50vh] w-[140vh] h-[140vh] bg-[#FFA900] rounded-full z-0"></div>
      <div className="absolute top-1/2 -translate-y-1/2 -left-[50vh] w-[90vh] h-[90vh] bg-[#0019FF] rounded-full z-0"></div>

      {/* Logo in top right */}
      <div className="absolute top-8 right-12 z-10 flex flex-col items-center">
        <div className="flex items-end space-x-1">
          <span className="text-white font-normal text-6xl tracking-tight">N</span>
          <div className="flex flex-col items-center justify-end h-full pb-0.5">
            <div className="w-4 h-4 bg-[#F59E0B] rounded-full mb-1"></div>
            <span className="text-white font-normal text-6xl tracking-tight leading-none">I</span>
          </div>
          <span className="text-white font-normal text-6xl tracking-tight">D</span>
        </div>
        <div className="w-full h-px bg-gray-400 mt-2 mb-1"></div>
        <span className="text-white text-[11px] tracking-[0.2em] font-light">PROGRESS TECHNOLOGY</span>
      </div>

      <div className="relative z-10 w-full max-w-md">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-[3.5rem] font-bold text-white tracking-wider">LOGIN</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6 w-full max-w-sm">
          
          {/* Username Input */}
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full px-4 py-3 bg-transparent border border-gray-500 rounded focus:border-white focus:outline-none text-white placeholder-gray-500 transition-colors text-lg"
              placeholder="Username"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-3 bg-transparent border border-gray-500 rounded focus:border-white focus:outline-none text-white placeholder-gray-500 transition-colors text-lg"
              placeholder="Password"
              required
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors underline decoration-1 underline-offset-4">
                forgot your password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 flex justify-center items-center py-3.5 px-4 rounded shadow-lg text-lg font-bold text-black bg-[#FFA900] hover:bg-[#e69800] focus:outline-none transition-colors"
          >
            LOGIN
          </button>
        </form>
        
      </div>
    </div>
  );
}

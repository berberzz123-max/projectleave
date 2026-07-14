import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Login from './pages/Login';

// User Pages
import UserDashboard from './pages/user/UserDashboard';
import LeaveRequest from './pages/user/LeaveRequest';
import LeaveHistory from './pages/user/LeaveHistory';

// Manager Pages
import ManagerDashboard from './pages/manager/ManagerDashboard';
import ManagerRequests from './pages/manager/ManagerRequests';
import ManagerEmployees from './pages/manager/ManagerEmployees';

// HR Pages
import HRDashboard from './pages/hr/HRDashboard';
import HRLeaveManagement from './pages/hr/HRLeaveManagement';
import HRQuotas from './pages/hr/HRQuotas';
import HRReports from './pages/hr/HRReports';

// CEO Pages
import CEODashboard from './pages/ceo/CEODashboard';
import CEOReports from './pages/ceo/CEOReports';
import CEOApprovals from './pages/ceo/CEOApprovals';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        
        {/* User Routes */}
        <Route path="/user" element={<Layout role="user"><UserDashboard /></Layout>} />
        <Route path="/user/request" element={<Layout role="user"><LeaveRequest /></Layout>} />
        <Route path="/user/history" element={<Layout role="user"><LeaveHistory /></Layout>} />

        {/* Manager Routes */}
        <Route path="/manager" element={<Layout role="manager"><ManagerDashboard /></Layout>} />
        <Route path="/manager/requests" element={<Layout role="manager"><ManagerRequests /></Layout>} />
        <Route path="/manager/employees" element={<Layout role="manager"><ManagerEmployees /></Layout>} />

        {/* HR Routes */}
        <Route path="/hr" element={<Layout role="hr"><HRDashboard /></Layout>} />
        <Route path="/hr/management" element={<Layout role="hr"><HRLeaveManagement /></Layout>} />
        <Route path="/hr/quotas" element={<Layout role="hr"><HRQuotas /></Layout>} />
        <Route path="/hr/reports" element={<Layout role="hr"><HRReports /></Layout>} />

        {/* CEO Routes */}
        <Route path="/ceo" element={<Layout role="ceo"><CEODashboard /></Layout>} />
        <Route path="/ceo/reports" element={<Layout role="ceo"><CEOReports /></Layout>} />
        <Route path="/ceo/approvals" element={<Layout role="ceo"><CEOApprovals /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;

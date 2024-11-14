import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  homepage,
  home,
  withdraw,
  deposit,
  starting,
  profile,
  personal,
  level,
  payment,
  notifications
} from "./constants/app.routes";

import LoginLayout from "./pages/authentication/LoginLayout";
import HomeLayout from "./pages/dashboard/HomeLayout";
import Login from "./pages/authentication/Login";
import Home from "./pages/dashboard/Home";
import WithdrawLayout from "./pages/dashboard/WithdrawLayout";
import Withdraw from "./pages/dashboard/Withdraw";
import DepositLayout from "./pages/dashboard/DepositLayout";
import Deposit from "./pages/dashboard/Deposit";
import Starting from "./pages/dashboard/Starting";
import Profile from "./pages/dashboard/Profile";
import PersonalInfo from "./pages/dashboard/PersonalInfo";
import Level from "./pages/dashboard/Level";
import Payment from "./pages/dashboard/Payment";
import Notification from "./pages/dashboard/Notifications";

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Layout */}
        <Route path={homepage} element={<LoginLayout />}>
          <Route index element={<Login />} />
        </Route>
        {/* Dashboard Layout */}
        <Route path={home} element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path={starting} element={<Starting />} />
          <Route path={profile} element={<Profile />} />
          <Route path={personal} element={<PersonalInfo />} />
          <Route path={level} element={<Level />} />
          <Route path={payment} element={<Payment />} />
          <Route path={notifications} element={<Notification />} />

          <Route path={withdraw} element={<WithdrawLayout />}>
            <Route index element={<Withdraw />} />
          </Route>
          <Route path={deposit} element={<DepositLayout />}>
            <Route index element={<Deposit />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

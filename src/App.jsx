import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  homepage,
  home,
  withdraw,
  deposit,
  homer
} from "./constants/app.routes";

import LoginLayout from "./pages/authentication/LoginLayout";
import HomeLayout from "./pages/dashboard/HomeLayout";
import Login from "./pages/authentication/Login";
import Home from "./pages/dashboard/Home";
import WithdrawLayout from "./pages/dashboard/WithdrawLayout";
import Withdraw from "./pages/dashboard/Withdraw";
import DepositLayout from "./pages/dashboard/DepositLayout";
import Deposit from "./pages/dashboard/Deposit";

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Layout */}
        <Route path={homepage} element={<LoginLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path={homer} element={<Home />} />

        {/* Dashboard Layout */}
        <Route path={home} element={<HomeLayout />}>
          <Route index element={<Home />} />
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

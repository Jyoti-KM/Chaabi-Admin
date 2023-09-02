import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Components from "./pages/Components/Components";
import Analytics from "./pages/Analytics/Analytics";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAccount from "./pages/MyAccount/MyAccount";
import Users from "./pages/Users/Users";
import Support from "./pages/Support/Support";

import Layout from "./Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signup/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Components />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/support" element={<Support />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

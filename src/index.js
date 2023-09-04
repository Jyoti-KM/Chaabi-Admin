import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Components from './Wrapper/Components/Components';
import Dashboard from './Wrapper/Dashboard/Dashboard';
import Training from './Wrapper/Training/Training';
import Users from './Wrapper/Users/Users';
import Analytics from './Wrapper/Analytics/Analytics';
import MyAccount from './Wrapper/MyAccount/MyAccount';
import Support from './Wrapper/Support/Support';

import Layout from "./Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signup/SignUp";
import OrganisationLogin from "./pages/Organisation /OrganisationLogin";
import Login from "./pages/Login/Login";
// import Training from "./pages/Training/Training";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Components />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/training" element={<Training />} />
            <Route path="/users" element={<Users />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/support" element={<Support />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/organisation" element={<OrganisationLogin />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

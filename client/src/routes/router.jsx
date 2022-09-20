import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import Header from "../components/Header";
import CreateAccount from '../views/BankServices/CreateAccount/CreateAccount';
import CardRequest from '../views/BankServices/CardRequest/CardRequest';
import LoanRequest from '../views/BankServices/LoanRequest/LoanRequest';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Header />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route exact path="services">
            <Route path="create-bank-acount" element={<CreateAccount />} />
            <Route path="loan-request" element={<LoanRequest />} />
            <Route path="card-request" element={<CardRequest />} />
          </Route>
          <Route path="blogs" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

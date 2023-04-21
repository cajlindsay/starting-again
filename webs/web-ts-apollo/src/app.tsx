import React from 'react';
import { BrowserRouter, NavLink, Route, Navigate, Routes } from 'react-router-dom';

import CarsList from './cars.tsx';

import './app.scss';

export default function App() {
  return (
    <div id="app">
      <div>web ts apollo</div>
      <BrowserRouter>
        <div className="nav">
          <NavLink to="/cars">Cars</NavLink>
        </div>
        <Routes>
          <Route
            path="/cars"
            element={<CarsList />}
          />
          <Route
            path="*"
            element={<Redirect />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Redirect() {
  return <Navigate to="/cars" />;
}

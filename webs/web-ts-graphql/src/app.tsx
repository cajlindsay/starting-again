import React from 'react';
import { BrowserRouter, NavLink, Route, Navigate, Routes } from 'react-router-dom';

import Dice from './dice.tsx';
import CarsList from './cars.tsx';

import './app.scss';

export default function App() {
  return (
    <div id="app">
      <div>web ts graphql</div>
      <BrowserRouter>
        <div className="nav">
          <NavLink to="/cars">Cars</NavLink>
          <NavLink to="/dice">Dice</NavLink>
        </div>
        <Routes>
          <Route
            path="/cars"
            element={<CarsList />}
          />
          <Route
            path="/dice"
            element={<Dice />}
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
  return <Navigate to="/dice" />;
}

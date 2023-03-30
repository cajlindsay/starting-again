import React, { useCallback, useState } from 'react';
import { BrowserRouter, NavLink, Route, Navigate, Routes } from 'react-router-dom';

import { logOut } from '@starting-again/web-common/src/auth';
import apiClient from '@starting-again/web-common/src/api-client.js';
import CarsList from './cars';
import PeopleList from './people';
import DevicesList from './devices';

import './app.scss';

export default function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <div>web 1</div>
        <div className="nav">
          <NavLink to="/route-1">Route 1</NavLink>
          <NavLink to="/route-2">Route 2</NavLink>
          <NavLink to="/cars">Cars</NavLink>
          <NavLink to="/people">People</NavLink>
          <NavLink to="/devices">Devices</NavLink>
        </div>
        <Routes>
          <Route
            path="/route-1"
            element={<Route1 />}
          />
          <Route
            path="/route-2"
            element={<Route2 />}
          />
          <Route
            path="/cars"
            element={<CarsList />}
          />
          <Route
            path="/people"
            element={<PeopleList />}
          />
          <Route
            path="/devices"
            element={<DevicesList />}
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
  return <Navigate to="/route-1" />;
}

function Route1() {
  return <div>Route 1</div>;
}

function Route2() {
  const [data, setData] = useState();

  const onCallAPI1 = useCallback(async () => {
    const response = await apiClient.get('/api-1');
    setData(response.data);
  }, []);

  const onCallAPI2 = useCallback(async () => {
    const response = await apiClient.get('/api-2');
    setData(response.data);
  }, []);

  return (
    <div>
      <button onClick={onCallAPI1}>API 1</button>
      <button onClick={onCallAPI2}>API 2</button>
      <button onClick={logOut}>Sign out</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

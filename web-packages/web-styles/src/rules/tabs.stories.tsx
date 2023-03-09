import React, { useState } from 'react';
import type { Story } from '@ladle/react';
import cn from 'classnames';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';

export const WithStylesOnly: Story = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="tab-bar">
        <a
          href="#"
          className={cn({ active: activeTab === 1 })}
          onClick={() => setActiveTab(1)}
        >
          Tab 1
        </a>
        <a
          href="#"
          className={cn({ active: activeTab === 2 })}
          onClick={() => setActiveTab(2)}
        >
          Tab 2
        </a>
        <a
          href="#"
          className={cn({ active: activeTab === 3 })}
          onClick={() => setActiveTab(3)}
        >
          Tab 3
        </a>
      </div>
      <div
        className="tab-panels"
        style={{ height: '400px', maxWidth: '600px' }}
      >
        <div className={cn({ active: activeTab === 1 })}>Tab panel 1</div>
        <div className={cn({ active: activeTab === 2 })}>Tab panel 2</div>
        <div className={cn({ active: activeTab === 3 })}>Tab panel 3</div>
      </div>
    </div>
  );
};

export const WithRoutes: Story = () => {
  return (
    <BrowserRouter>
      <div className="tab-bar">
        <NavLink to="/tab-1">Tab 1</NavLink>
        <NavLink to="/tab-2">Tab 2</NavLink>
        <NavLink to="/tab-3">Tab 3</NavLink>
      </div>
      <div
        className="tab-panels"
        style={{ height: '400px', maxWidth: '600px' }}
      >
        <Routes>
          <Route
            path="/tab-1"
            element={<div className="active">Tab panel 1</div>}
          />
          <Route
            path="/tab-2"
            element={<div className="active">Tab panel 2</div>}
          />
          <Route
            path="/tab-3"
            element={<div className="active">Tab panel 3</div>}
          />
          <Route
            path="*"
            element={<Navigate to="/tab-1" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

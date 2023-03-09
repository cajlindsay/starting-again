import React, { CSSProperties, useState } from 'react';
import cn from 'classnames';

interface ButtonTabsComponentProps {
  children: React.ReactElement[];
  startTabId: string | number;
}

export function ButtonTabsComponent({ children, startTabId }: ButtonTabsComponentProps) {
  const [activeTabId, setActiveTabId] = useState<string | number>(startTabId);

  return (
    <div>
      {React.Children.map(children, (child) => {
        return child.type === ButtonTabBar
          ? React.cloneElement(child, { activeTabId, onTabClick: setActiveTabId })
          : child.type === ButtonTabPanels
          ? React.cloneElement(child, { activeTabId })
          : null;
      })}
    </div>
  );
}

interface ButtonTabPanelsProps {
  children: React.ReactElement[];
  activeTabId?: string | number;
  style?: CSSProperties | undefined;
}

export function ButtonTabPanels({ children, activeTabId, style }: ButtonTabPanelsProps) {
  return (
    <div
      className="tab-panels"
      style={style}
    >
      {React.Children.map(children, (child) => {
        const { tabId, className } = child.props;

        return React.cloneElement(child, {
          className: cn(className, { active: activeTabId === tabId })
        });
      })}
    </div>
  );
}

interface ButtonTabPanelProps {
  children: React.ReactNode;
  tabId?: string | number;
  className?: string;
}

export function ButtonTabPanel({ className, children }: ButtonTabPanelProps) {
  return <div className={className}>{children}</div>;
}

interface ButtonTabBarProps {
  children: React.ReactElement[];
  activeTabId?: string | number;
  onTabClick?: (tabId: string | number) => void;
}

export function ButtonTabBar({ children, activeTabId, onTabClick }: ButtonTabBarProps) {
  return (
    <div className="tab-bar">
      {React.Children.map(children, (child) => {
        const { tabId, className } = child.props;

        return React.cloneElement(child, {
          className: cn(className, { active: activeTabId === tabId }),
          onClick: () => onTabClick(tabId)
        });
      })}
    </div>
  );
}

interface ButtonTabProps {
  children: React.ReactNode;
  tabId?: string | number;
  onClick?: () => void;
  className?: string;
}

export function ButtonTab({ children, onClick, className }: ButtonTabProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

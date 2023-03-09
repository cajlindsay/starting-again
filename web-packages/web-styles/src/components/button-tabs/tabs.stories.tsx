import React from 'react';
import type { Story } from '@ladle/react';
import { ButtonTabsComponent, ButtonTabPanel, ButtonTabBar, ButtonTab, ButtonTabPanels } from './button-tabs';

export const WithComponents: Story = () => {
  return (
    <ButtonTabsComponent startTabId={1}>
      <ButtonTabBar>
        <ButtonTab tabId={1}>Tab 1</ButtonTab>
        <ButtonTab tabId={2}>Tab 2</ButtonTab>
        <ButtonTab tabId={3}>Tab 3</ButtonTab>
      </ButtonTabBar>
      <ButtonTabPanels style={{ height: '400px', maxWidth: '600px' }}>
        <ButtonTabPanel tabId={1}>Tab panel 1</ButtonTabPanel>
        <ButtonTabPanel tabId={2}>Tab panel 2</ButtonTabPanel>
        <ButtonTabPanel tabId={3}>Tab panel 3</ButtonTabPanel>
      </ButtonTabPanels>
    </ButtonTabsComponent>
  );
};

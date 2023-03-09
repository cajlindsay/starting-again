import React from 'react';
import type { Story } from '@ladle/react';

export const Primary: Story = () => (
  <div
    className="card-primary"
    style={{ height: '400px', maxWidth: '600px', color: 'white', padding: '15px' }}
  >
    Card Primary
  </div>
);

export const PrimaryGradient: Story = () => (
  <div
    className="card-gradient-primary"
    style={{ height: '400px', maxWidth: '600px', color: 'white', padding: '15px' }}
  >
    Card Gradient Primary
  </div>
);

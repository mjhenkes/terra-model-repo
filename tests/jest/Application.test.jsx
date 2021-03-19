import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Application from '../../src/Application';

describe('ThemeContextProvider', () => {
  it('should render', async () => {
    render(<Application />);

    const title = await screen.findByTitle('application name');
    expect(title).toHaveClass('title');
    expect(title).toHaveAttribute('title', 'application name');
  });
});

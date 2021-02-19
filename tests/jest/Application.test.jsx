import React from 'react';
import Application from '../../src/Application';

describe('ThemeContextProvider', () => {
  describe('Snapshots', () => {
    it('should render', () => {
      const wrapper = shallow(<Application />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render with default config specified', () => {
      const config = {
        defaultLocale: 'es',
        defaultTheme: 'my theme',
        defaultDirection: 'rtl',
      };
      const wrapper = shallow((
        <AppSettingsProvider settingsConfig={config}>
          <div />
        </AppSettingsProvider>
      ));

      expect(wrapper).toMatchSnapshot();
    });
  });
});

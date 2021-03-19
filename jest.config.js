const jestConfig = require('@cerner/jest-config-terra');

module.exports = {
  ...jestConfig,
  setupFiles: [
    'regenerator-runtime',
  ],
};

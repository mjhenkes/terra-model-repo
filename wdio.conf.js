// eslint-disable-next-line import/no-extraneous-dependencies
const { config } = require('@cerner/terra-functional-testing/lib/config/wdio.conf');

config.serviceOptions = { selector: '#root' };

exports.config = config;

/* eslint-env node */
const p = require('../package.json');

module.exports = {
  getVersion: () => {
    return p.version;
  }
};

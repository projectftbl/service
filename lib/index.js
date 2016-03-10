var App = require('@ftbl/app')[require('@ftbl/utility').getApp(process.argv)]
  , pkg = require('../package.json');

module.exports = new App(pkg.name, __dirname
  , require('@ftbl/session-service')
  , require('@ftbl/user-service')
  , require('@ftbl/member-service')
);
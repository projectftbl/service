var App = require('@recipher/app')[require('@recipher/utility').getApp(process.argv)]
  , pkg = require('../package.json');

module.exports = new App(pkg.name, __dirname
  , require('@recipher/session-service')
  , require('@recipher/user-service')
  , require('@recipher/member-service')
  , require('@recipher/contact-service')
);
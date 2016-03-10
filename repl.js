var repl = require('@ftbl/repl')
  , pkg = require('./package.json')

repl(pkg.name, require('./lib'));
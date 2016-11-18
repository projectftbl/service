var repl = require('@recipher/repl')
  , pkg = require('./package.json')

repl(pkg.name, require('./lib'));
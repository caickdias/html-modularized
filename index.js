const { readFileSync } = require('fs')
const posthtml = require('posthtml')
const options = { /* see available options below */ }

posthtml()
  .use(require('posthtml-modules')(options))
  .process(readFileSync('index.html', 'utf8'))
  .then((result) => result);
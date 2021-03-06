const shell = require('shelljs');

console.log('Olá Mundo');

shell.exec('git diff --name-only branch-scripts-testes..main');

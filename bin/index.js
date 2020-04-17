#!/usr/bin/env node

const program = require('commander');
const version = require('../package').version;

program.version(version)
  .usage(`<command> [options]`);

program.command('create <app-name>')
  .description('create a new project by react-cli')
  .action((name, cmd) => {
    require('../packages/create')(name);
  });

program.parse(process.argv);  
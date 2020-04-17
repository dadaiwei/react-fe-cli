#!/usr/bin/env node

const program = require('commander');
const version = require('../package').version;

program.version(version)
  .usage(`<command> [options]`);

program.command('create <app-name>')
  .description('create a new project by react-cli')
  .action((name) => {
    require('../packages/create')(name);
  });

program.command('dev')
  .description('Start app development.')
  .action(() => {
    require('../packages/dev')();
  });

program.command('build')
  .description('Build app bundle.')
  .action(() => {
    require('../packages/prod')();
  });

program.parse(process.argv);  
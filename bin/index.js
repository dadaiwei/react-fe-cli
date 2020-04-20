#!/usr/bin/env node

const program = require('commander');
const version = require('../package').version;

program.version(version)
  .usage(`<command> [options]`);

// 注册create命令
program.command('create <app-name>')
  .description('create a new project by react-cli')
  .action((name) => {
    require('../packages/create')(name);
  });

// 注册dev命令
program.command('dev')
  .description('Start app development.')
  .action(() => {
    require('../packages/dev')();
  });

// 注册build命令
program.command('build')
  .description('Build app bundle.')
  .action(() => {
    require('../packages/prod')();
  });

program.parse(process.argv);  
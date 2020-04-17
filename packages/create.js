#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const download = require('download-git-repo');
const ora = require('ora');
const {successLog, errorLog} = require('../utils/index');

const templateUrl = 'dadaiwei/react-template';

// 修改package.json中的name
function editPackageName(appName) {
  return new Promise((resolve, reject) => {
    const packageJsonPath = path.resolve(process.cwd(), `${appName}/package.json`);
    const packageJson = require(packageJsonPath);
    packageJson.name = appName;
    fs.writeFile(packageJsonPath, JSON.stringify(packageJson), (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

// 下载依赖包
function installPackages(appName) {
  const appPath = path.resolve(process.cwd(), appName);
  return new Promise((resolve, reject) => {
    const spinner = ora('开始安装相关依赖包');
    child_process.exec('npm install', {cwd: appPath}, (err) => {
      spinner.stop();
      if (err) {
        return reject(err);
      }
      successLog('依赖包安装成功');
      console.log(`cd ${appName}`);
      console.log(`npm run start`);
      resolve();
    });
  });
}

// 下载项目模板
function downloadTemplate(appName) {
  return new Promise((resolve, reject) => {
    const spinner = ora('开始生成项目');
    spinner.start();
    download(templateUrl, `./${appName}`, {clone: false}, err => {
      spinner.stop();
      if (err) {
        return reject(err);
      }
      successLog('项目生成成功');
      resolve();
    });
  });
}

async function create(appName) {
  try {
    await downloadTemplate(appName);
    await editPackageName(appName);
    await installPackages(appName);
  } catch (err) {
    errorLog(err);
    process.exit(1);
  }
}

module.exports = create;
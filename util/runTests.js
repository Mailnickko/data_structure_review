'use strict';

const Mocha = require('mocha');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const MANIFEST_FILE_PATH = './problems/mainfest.js';
const runner = new Mocha({
  ui: 'bdd',
  reporter: 'spec',
  bail: false,
  timeout: 10000,
  slow: 3000
});

function getLocationArg() {
  return process.argv[2];
}

function isDirectory(filePath) {
  return fs.lstatSync(filePath).isDirectory();
}

function toFullPath(rootDir, pathPart) {
  return path.join(process.cwd(), rootDir, pathPart);
}

function addTestFilesFromRootDirectory(rootDir) {
  const files = glob.sync('**/*.test.js', { cwd: rootDir});
  files.forEach( file => {
    runner.addFile(toFullPath(rootDir, file));
  });
}

function addTestFiles(locationArg) {
  let fileOrDirPath;

  if (locationArg) {
    fileOrDirPath = locationArg;
    if (isDirectory(fileOrDirPath)) {
      addTestFilesFromRootDirectory(fileOrDirPath);
    } else {
      runner.addFile(fileOrDirPath);
    }
  } else {
    runner.addFile(MANIFEST_FILE_PATH);
  }
}

function run() {
  addTestFiles(getLocationArg());
  runner.run();
}

run();




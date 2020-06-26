'use strict';

const path = require('path');

const {
  generateConfig,
  outputPath,
} = require('./webpack.utils');

const demoOutputPath = path.resolve(
  outputPath,
  'demos',
);

const advancedDemoDistConfig = generateConfig(
  'advanced-dist',
  path.resolve(
    __dirname,
    'demos',
    'advanced-dist',
    'index.js',
  ),
);

advancedDemoDistConfig.output.path = demoOutputPath;

const advancedDemoSrcConfig = generateConfig(
  'advanced-src',
  path.resolve(
    __dirname,
    'demos',
    'advanced-src',
    'index.js',
  ),
);

advancedDemoSrcConfig.output.path = demoOutputPath;

const simpleDemoSrcConfig = generateConfig(
  'simple-src',
  path.resolve(
    __dirname,
    'demos',
    'simple-src',
    'index.js',
  ),
);

simpleDemoSrcConfig.output.path = demoOutputPath;

const tourDemoSrcConfig = generateConfig(
  'tour-src',
  path.resolve(
    __dirname,
    'demos',
    'tour-src',
    'index.js',
  ),
);

tourDemoSrcConfig.output.path = demoOutputPath;

module.exports = function () {
  return [
    // Note that the demo files depend on `dist/clsp-player.min.js`
    advancedDemoDistConfig,
    advancedDemoSrcConfig,
    simpleDemoSrcConfig,
    tourDemoSrcConfig,
  ];
};

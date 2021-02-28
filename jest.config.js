const path = require('path');
module.exports = {
  transform: { '\\.[jt]sx?$': ['babel-jest', { rootMode: 'upward' }] },
  coverageDirectory: './packages/tests/coverage',
  collectCoverageFrom: ['packages/core/dist/*/*.js', '!packages/core/dist/_virtual/*.js'],
};

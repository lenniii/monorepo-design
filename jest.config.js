module.exports = {
  transform: {
    '\\.[jt]sx?$': ['babel-jest', { rootMode: 'upward' }],
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  coverageDirectory: './packages/tests/coverage',
  collectCoverageFrom: ['packages/core/dist/*/*.js', '!packages/core/dist/_virtual/*.js'],
};

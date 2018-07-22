"format cjs";

const engine = require('./engine');
const conventionalCommitTypes = require('conventional-commit-types-emoji');

module.exports = engine({
  types: conventionalCommitTypes.types
});

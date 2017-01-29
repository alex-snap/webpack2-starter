const path = require('path');
const ROOT = path.resolve(__dirname, '../');

const root = (relativePath) => path.join.apply(path, [ROOT, relativePath]);

module.exports = { root };
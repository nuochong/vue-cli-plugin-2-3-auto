function loadModule(name) {
  try {
    return require(name);
  } catch (e) {
    return undefined;
  }
}

module.exports.loadModule = loadModule;

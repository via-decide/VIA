// MicroContentRegistry.js — stub
(function (global) {
  'use strict';
  const _registry = new Map();
  global.MicroContentRegistry = {
    register(name, def) { _registry.set(name, def); },
    get(name) { return _registry.get(name) || null; },
    getAll() { return Array.from(_registry.values()); },
    version: '1.0.0',
  };
})(window);

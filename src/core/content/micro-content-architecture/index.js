// micro-content-architecture/index.js — stub
(function (global) {
  'use strict';

  /**
   * createMicroContentArchitecture — factory used by index.html's VIA_MICRO_CONTENT.
   * Returns a minimal runtime that satisfies the typeof checks without errors.
   */
  global.createMicroContentArchitecture = function createMicroContentArchitecture(opts) {
    const options = opts || {};
    return {
      parser:   global.MicroContentParser   || { parse: (r) => ({ raw: r, tokens: [] }) },
      composer: global.MicroContentComposer || { compose: (t) => t },
      registry: global.MicroContentRegistry || { register() {}, get() { return null; }, getAll() { return []; } },
      runtime: {
        subscribe() {},
        emit() {},
        getSnapshot() { return null; },
      },
      process(raw) {
        const parsed   = this.parser.parse(raw);
        const composed = this.composer.compose(parsed.tokens);
        return composed;
      },
      options,
      version: '1.0.0',
    };
  };
})(window);

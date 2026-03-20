// onboarding.js — VIA Onboarding Bootstrap
// Initializes onboarding state and exposes helpers used by index.html
(function (global) {
  'use strict';

  // No-op guard: if core VIA globals already exist, don't re-define
  if (global.__viaOnboardingLoaded) return;
  global.__viaOnboardingLoaded = true;

  // Expose a minimal ddLoad stub so index.html's typeof check is safe
  // The real ddLoad is defined inline in index.html; this only fires if missing
  if (typeof global.ddLoad === 'undefined') {
    global.ddLoad = function (storyKey, _el) {
      console.warn('[onboarding.js] ddLoad stub called for:', storyKey);
    };
  }
})(window);

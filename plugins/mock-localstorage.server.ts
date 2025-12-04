// Mock localStorage for server-side rendering
if (import.meta.server) {
  globalThis.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: () => null,
    length: 0
  };
}

export default defineNuxtPlugin(() => {
  // Plugin initialization
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080, 
  viewportWidth: 1980,
  e2e: {
    baseUrl: 'https://www.origamirisk.com',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "chromeWebSecurity": false
});

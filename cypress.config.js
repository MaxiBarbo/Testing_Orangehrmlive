const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalSessionSuport:true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin: true
  },
  reporter: 'mochawesome'
});

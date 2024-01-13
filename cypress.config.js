const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'c8g9vj',
  e2e: {
    baseUrl: 'https://wordcounter.net/',
    chromeWebSecurity: false, 
  }
})
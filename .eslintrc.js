module.exports = {
    "plugins": [
      "prettier"
    ],
    "extends": [
      "eslint:recommended",
      "prettier"
    ],
    "env": {
      "es6": true,
      "browser": true
    },
    rules: {
        "no-debugger": "true",
        "no-extra-semi": "error"
      }
 };
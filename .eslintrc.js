module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "it": true,
        "expect": true,
        "describe": true,
        "COMPANY": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 1
    }
};
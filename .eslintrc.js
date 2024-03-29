module.exports = {
  root: true,
  env: {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "jest",
    "jsx-a11y",
    "eslint-plugin-redux-namespaced-actions",
    "@typescript-eslint",
    "eslint-plugin-react"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["src/public/static/vue3.js"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "no-console": "off",

    "react/jsx-key": 0,
    "react-hooks/exhaustive-deps": 0,
    "redux-namespaced-actions/redux-namespaced-actions": 2,
    "jsx-max-props-per-line": 0,
    "jsx-a11y/accessible-emoji": 2,
    "jsx-a11y/alt-text": 2,
    "jsx-a11y/anchor-has-content": 2,
    "jsx-a11y/anchor-is-valid": 2,
    "jsx-a11y/aria-activedescendant-has-tabindex": 2,
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/aria-proptypes": 2,
    "jsx-a11y/aria-role": 2,
    "jsx-a11y/aria-unsupported-elements": 2,
    "jsx-a11y/click-events-have-key-events": 2,
    "jsx-a11y/heading-has-content": 2,
    "jsx-a11y/html-has-lang": 2,
    "jsx-a11y/iframe-has-title": 2,
    "jsx-a11y/img-redundant-alt": 2,
    "jsx-a11y/interactive-supports-focus": 2,
    "jsx-a11y/lang": 2,
    "jsx-a11y/media-has-caption": 2,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/no-access-key": 2,
    "jsx-a11y/no-distracting-elements": 2,
    "jsx-a11y/no-interactive-element-to-noninteractive-role": 2,
    "jsx-a11y/no-noninteractive-element-interactions": [
     "error",
     {
       "handlers": [
         "onBlur",
         "onHover",
         "onFocus",
         "onClick",
         "onMouseDown",
         "onMouseUp",
         "onKeyPress",
         "onKeyDown",
         "onKeyUp"
       ]
     }
    ],
    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
     "error",
     {
       "ul": ["tablist"],
       "li": ["tab"]
     }
    ],
    "jsx-a11y/no-noninteractive-tabindex": 2,
    "jsx-a11y/no-onchange": 2,
    "jsx-a11y/no-redundant-roles": 2,
    "jsx-a11y/no-static-element-interactions": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "jsx-a11y/scope": 2,
    "jsx-a11y/tabindex-no-positive": 2,
    // "no-restricted-imports": [
    //   "error",
    //   {
    //     "paths": [
    //       {
    //         "name": "@kyper/input",
    //         "message": "Please import from 'src/privacy/input instead'."
    //       },
    //       {
    //         "name": "@kyper/select",
    //         "message": "Please import from 'src/privacy/input instead'."
    //       },
    //       {
    //         "name": "@kyper/selectionbox",
    //         "message": "Please import from 'src/privacy/input instead'."
    //       },
    //       {
    //         "name": "@kyper/textarea",
    //         "message": "Please import from 'src/privacy/input instead'."
    //       },
    //       {
    //         "name": "@kyper/userfeedback",
    //         "message": "Please import from 'src/privacy/input instead'.",
    //         "importNames": ["UserFeedback"]
    //       }
    //     ]
    //   }
    // ]
  }
//  "settings": {
//    "react": {
//      "version": "detect"
//    }
//  },
//  "globals": {
//    "logger": true,
//    "spyOn": true
//  }
};
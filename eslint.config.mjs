import config from "eslint-config-standard";


export default [
  ...[].concat({
    ...config,
    "extends": ["@ngrx/all"],
    "rules": {
      "@ngrx/good-action-hygiene": "warn"
    }
  }),
];

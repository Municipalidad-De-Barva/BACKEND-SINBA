module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {},
};
/*
estas lineas van en el package.json para activar el precommit, para habilitar estandares de hacer un commit aplique los cambios automaticamente, por el momento se desabilita.
"husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "npx prettier --write src/* && npx eslint --fix src/*"
    }
  }
*/

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [],
  rules: {},
};

/*
esta linia de codigo, activa eslint para comprobar codigo antes de hacer commit en git, la linea se inserta en el package.json en husky, se elimino por que presenta problemas
"pre-commit": "npx prettier --write src/* && npx eslint --fix src/*"
*/
//
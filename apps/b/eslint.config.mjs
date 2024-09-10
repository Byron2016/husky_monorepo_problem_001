import base from "../../eslint.config.base.mjs";

const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
};

export default [
  ...base,
  {
    rules: {
      "no-unused-vars": RULES.OFF,
    },
  },
];

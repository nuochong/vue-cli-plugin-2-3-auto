module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      "demi:fix": "npx vue-demi-fix",
    },
    dependencies: {
      "vue-2-3-auto": "^1.0.1",
      "vue-demi-auto": "^0.6.1",
    },
    devDependencies: {
      vue2: "npm:vue@^2.6.12",
      vue3: "npm:vue@^3.0.0",
    },
  });
};

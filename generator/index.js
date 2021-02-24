module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      "demi:fix": "npx vue-demi-fix",
    },
    dependencies: {
      "vue-2-3-auto": "latest",
      "vue-demi-auto": "latest",
    },
    devDependencies: {
      vue2: "npm:vue@^2.6.12",
      vue3: "npm:vue@^3.0.2",
    },
  });
};

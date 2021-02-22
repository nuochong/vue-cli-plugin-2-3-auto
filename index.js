const { resolve } = require("path");
const { loadModule } = require("./utils/utils");
const webpack = require("webpack");
const toVueObj = {
  toVue2: resolve(__dirname, "./service/to-vue-2.js"),
  toVue3: resolve(__dirname, "./service/to-vue-3.js"),
};
module.exports = (api, options) => {
  const mainPath = resolve(process.cwd(), "./node_modules");
  let resourseArr = [];
  mainPath.replace(/(.*?node_modules)/g, (match, p1, offset) => {
    resourseArr.push(`${mainPath.substring(0, offset)}${p1}`);
  });

  api.configureWebpack((config) => {
    let toVueVersion = "null";
    if (mainPath.includes("node_modules")) {
      for (let item of resourseArr) {
        const Vue = loadModule(`${item}\\vue`);
        if (Vue && typeof Vue.version === "string") {
          if (Vue.version.startsWith("2.")) {
            console.log("vue2");
            toVueVersion = "toVue2";
          } else if (Vue.version.startsWith("3.")) {
            console.log("vue3");
            toVueVersion = "toVue3";
          } else {
            const err = `[vue-2-3] Vue version v${Vue.version} is not suppported.`;
            console.warn(err);
            throw new Error(err);
          }
        }
      }
    }
    console.log("toVueVersion", toVueObj[toVueVersion]);
    let tag = {};
    tag[toVueVersion] = [toVueObj[toVueVersion], "default"];
    config.plugins.push(new webpack.ProvidePlugin(tag));
  });
};

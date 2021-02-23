# vue-cli-plugin-2-3-auto

让你的组件同时兼容 vue2 或者 vue3 项目

## 起步

> 确保你安装的 vue-cli 版本 大于 v4.5.11，否则安装会失败。

```
$ vue -V
```

### 安装

```bash
$ vue add vue-cli-plugin-2-3-auto

# OR

$ vue invoke vue-cli-plugin-2-3-auto
```

### 快速开始

#### 组件为 vue3 时的使用方式

组件中使用方式如下方示例

Example.vue

```vue
<script>
import { h } from "vue3";

export default {
  name: "Example",
  props: {
    // msg: String,
  },
  data() {
    return {
      modalOpen: false,
    };
  },
  render() {
    return h(
      "div",
      {
        id: "hello",
        class: "text",
      },
      [h("span", "world-world")]
    );
  },
  beforeUnmount() {
    console.log("vue3-beforeUnmount-Example");
  },
  unmounted() {
    console.log("vue3-unmounted-Example");
  },
  mounted() {
    console.log("vue3-mounted-Example");
  },
  methods: {
    test() {
      console.log("vue3-test-Example");
    },
  },
};
</script>

<style scoped lang="less"></style>
```

HelloWorld.vue

```vue
<script>
import { reactive, toRefs } from "vue-demi-auto";
import { h } from "vue3";
import Example from "./Example";

export default {
  name: "HelloWorld",
  setup() {
    const bbb = reactive({
      ccc: "ccc",
    });
    console.log("bbb.ccc", bbb.ccc);
    return {
      ...toRefs(bbb),
    };
  },
  components: { Example },
  props: {
    // msg: String,
  },
  data() {
    return {
      modalOpen: false,
      user: {
        id: 2,
      },
      hebing: "helloworld",
    };
  },
  render() {
    return h(
      "div",
      {
        id: "hello" + this.ccc.value,
        class: "text",
        style: "color: red",
      },
      [h(Example)]
    );
  },
  beforeUnmount() {
    console.log("vue3-beforeUnmount-HelloWorld");
  },
  unmounted() {
    console.log("vue3-unmounted-HelloWorld");
  },
  mounted() {
    console.log("vue3-mounted-HelloWorld");
  },
  methods: {
    test() {
      console.log("vue3-test-HelloWorld");
    },
  },
};
</script>

<style scoped lang="less"></style>
```

mixed-development.vue

```vue
<template>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "Home",
  components: {
    HelloWorld: toVue2(HelloWorld),
  },
  mounted() {},
};
</script>

<style lang="less" scoped></style>
```

#### 组件为 vue2 时的使用方式

待描述

## 参考

[vue-demi-auto](https://github.com/nuochong/vue-demi-auto)
[vue-2-3-auto](https://github.com/nuochong/vue-2-3-auto)

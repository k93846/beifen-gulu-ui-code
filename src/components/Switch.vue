<template>
  <div>
    <h1>Switch组件示例 </h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch1Demo></Switch1Demo>
      </div>
      <div class="demo-actions">
        <!-- 使得点击后出现代码已完成 -->
        <ButtonDetail @click="seeCode1">查看代码</ButtonDetail>
      </div>
      <div class="demo-code">
        <!-- 已完成：封装代码文本，使用字符串 -->
        <article class="markdown-body">
          <pre v-if="codeVisible1" v-text="Switch1DemoCode.a"></pre>
        </article>

      </div>
    </div>


    <div class="demo">
      <h2>支持 disabled </h2>
      <div class="demo-component">
        <Switch2Demo></Switch2Demo>
      </div>
      <div class="demo-actions">
        <ButtonDetail @click="seeCode2">查看代码</ButtonDetail>
      </div>
      <div class="demo-code">
        <article class="markdown-body">
          <pre v-if="codeVisible2" v-text="Switch2DemoCode.a"></pre>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SwitchDetail from '../lib/SwitchDetail.vue';
import ButtonDetail from '../lib/ButtonDetail.vue';
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import Switch1DemoCode from './code of how to use/Switch1DemoCode.js'
import Switch2DemoCode from './code of how to use/Switch2DemoCode.js'

export default {
  components: { SwitchDetail, ButtonDetail, Switch1Demo, Switch2Demo },
  setup() {
    const bool = ref(false)
    const codeVisible1 = ref(false)
    const seeCode1 = () => {
      codeVisible1.value = !codeVisible1.value
    }
    const codeVisible2 = ref(false)
    const seeCode2 = () => {
      codeVisible2.value = !codeVisible2.value
    }
    return { bool, codeVisible1, codeVisible2, seeCode1, seeCode2, Switch1Demo, Switch1DemoCode, Switch2DemoCode }
  }

}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
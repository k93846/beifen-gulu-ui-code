<template>
    <!-- 已完成：修改该页面的样式 -->
    <!-- 已完成：添加每个示例的代码文本 -->
    <div>
        <h1>Button组件示例</h1>
        <div class="demo">
            <h2>示例1</h2>
            <div class="demo-component">
                <Button :theme="`button`">你好</Button>
                <Button :theme="`link`">你好</Button>
                <Button :theme="`text`">你好</Button>
            </div>
            <div class="demo-actions">
                <!-- 使得点击后出现代码已完成 -->
                <Button @click="seecode1">查看代码</Button>
            </div>
            <div class="demo-code">
                <!-- 已完成：封装代码文本，使用字符串 -->
                <article class="markdown-body">
                    <pre v-if="codeVisible1" v-text="ButtonCode1.a"></pre>
                </article>
            </div>
        </div>

        <div class="demo">
            <h2>示例5</h2>
            <div class="demo-component">
                <Button :theme="`button`" loading>加载按钮</Button>
                <Button :theme="`button`">加载完毕</Button>
            </div>
            <div class="demo-actions">
                <!-- 使得点击后出现代码已完成 -->
                <Button @click="seecode5">查看代码</Button>
            </div>
            <div class="demo-code">
                <!-- 已完成：封装代码文本，使用字符串 -->
                <article class="markdown-body">
                    <pre v-if="codeVisible5" v-text="ButtonCode5.a"></pre>
                </article>
            </div>
        </div>
        <div class="demo">
            <h2>示例2</h2>
            <div class="demo-component">
                <Button :theme="`button`" :size="`big`">大大大</Button>
                <Button :theme="`button`" :size="`normal`">普通</Button>
                <Button :theme="`button`" :size="`small`">小小小</Button>
            </div>
            <div class="demo-component">
                <Button :theme="`link`" :size="`big`">大大大</Button>
                <Button :theme="`link`" :size="`normal`">普通</Button>
                <Button :theme="`link`" :size="`small`">小小小</Button><br>
            </div>
            <div class="demo-component">
                <Button :theme="`text`" :size="`big`">大大大</Button>
                <Button :theme="`text`" :size="`normal`">普通</Button>
                <Button :theme="`text`" :size="`small`">小小小</Button>
            </div>
        </div>
        <div class="demo-actions">
            <!-- 使得点击后出现代码已完成 -->
            <Button @click="seecode2">查看代码</Button>
        </div>
        <div class="demo-code">
            <!-- 已完成：封装代码文本，使用字符串 -->
            <article class="markdown-body">
                <pre v-if="codeVisible2" v-text="ButtonCode2.a"></pre>
            </article>
        </div>
    </div>
    <div class="demo">
        <h2>示例3</h2>
        <div class="demo-component">
            <Button :theme="`button`" :level="`main`">主要按钮</Button>
            <Button :theme="`button`" :level="`normal`">普通按钮</Button>
            <Button :theme="`button`" :level="`danger`">危险按钮</Button>
        </div>

        <div class="demo-component">
            <Button :theme="`link`" :level="`main`">主要链接按钮</Button>
            <Button :theme="`link`" :level="`normal`">普通链接按钮</Button>
            <Button :theme="`link`" :level="`danger`">危险链接按钮</Button>
        </div>

        <div class="demo-component">
            <Button :theme="`text`" :level="`main`">主要文本按钮</Button>
            <Button :theme="`text`" :level="`normal`">普通文本按钮</Button>
            <Button :theme="`text`" :level="`danger`">危险文本按钮</Button>
        </div>
        <div class="demo-actions">
            <!-- 使得点击后出现代码已完成 -->
            <Button @click="seecode3">查看代码</Button>
        </div>
        <div class="demo-code">
            <!-- 已完成：封装代码文本，使用字符串 -->
            <article class="markdown-body">
                <pre v-if="codeVisible3" v-text="ButtonCode3.a"></pre>
            </article>
        </div>
    </div>

    <div class="demo">
        <h2>示例4</h2>
        <div class="demo-component">
            <Button :theme="`button`" disabled>禁用按钮</Button>
            <Button :theme="`link`" disabled>禁用链接按钮</Button>
            <Button :theme="`text`" disabled>禁用文本按钮</Button>
        </div>
        <div class="demo-actions">
            <!-- 使得点击后出现代码已完成 -->
            <Button @click="seecode4">查看代码</Button>
        </div>
        <div class="demo-code">
            <!-- 已完成：封装代码文本，使用字符串 -->
            <article class="markdown-body">
                <pre v-if="codeVisible4" v-text="ButtonCode4.a"></pre>
            </article>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import Button from '../lib/Button.vue';
import ButtonCode1 from './code of how to use/ButtonCode1';
import ButtonCode2 from './code of how to use/ButtonCode2';
import ButtonCode3 from './code of how to use/ButtonCode3';
import ButtonCode4 from './code of how to use/ButtonCode4';
import ButtonCode5 from './code of how to use/ButtonCode5';

export default {
    components: { Button },
    setup() {
        const codeVisible1 = ref(false)
        const codeVisible2 = ref(false)
        const codeVisible3 = ref(false)
        const codeVisible4 = ref(false)
        const codeVisible5 = ref(false)
        const seecode1 = () => {
            codeVisible1.value = !codeVisible1.value
        }
        const seecode2 = () => {
            codeVisible2.value = !codeVisible2.value
        }
        const seecode3 = () => {
            codeVisible3.value = !codeVisible3.value
        }
        const seecode4 = () => {
            codeVisible4.value = !codeVisible4.value
        }
        const seecode5 = () => {
            codeVisible5.value = !codeVisible5.value
        }
        return { seecode1, seecode2, seecode3, seecode4, seecode5, ButtonCode1, ButtonCode2, ButtonCode3, ButtonCode4, ButtonCode5, codeVisible1, codeVisible2, codeVisible3, codeVisible4, codeVisible5 }
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
        &+&{
            padding-top:0px;
        }
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        align-items: center;
        gap: 16px;        
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

.markdown-body {
    >pre {
        line-height: inherit;
    }
}

</style>